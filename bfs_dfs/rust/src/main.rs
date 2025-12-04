use std::fs;
use std::rc::Rc;
use std::cell::RefCell;

/// Structure pour représenter un nœud du DFS
#[derive(Debug)]
struct Node {
    x: i16,  // colonne
    y: i16,  // ligne
    parent: Option<Rc<RefCell<Node>>>,
}

fn contains_pos(list: &Vec<Rc<RefCell<Node>>>, x: i16, y: i16) -> bool {
    list.iter().any(|n| {
        let r = n.borrow();
        r.x == x && r.y == y
    })
}

fn move_dir(maze: &Vec<String>, pos_x: i16, pos_y: i16) -> Vec<bool> {
    let mut dir = vec![false; 4]; // [haut, bas, gauche, droite]

    // Vérification des bords pour éviter panic
    let h = maze.len() as i16;
    let w = maze[0].len() as i16;

    // haut
    if pos_y > 0 {
        if let Some(c) = maze[(pos_y - 1) as usize].chars().nth(pos_x as usize) {
            if c != '#' { dir[0] = true; }
        }
    }
    // bas
    if pos_y < h - 1 {
        if let Some(c) = maze[(pos_y + 1) as usize].chars().nth(pos_x as usize) {
            if c != '#' { dir[1] = true; }
        }
    }
    // gauche
    if pos_x > 0 {
        if let Some(c) = maze[pos_y as usize].chars().nth((pos_x - 1) as usize) {
            if c != '#' { dir[2] = true; }
        }
    }
    // droite
    if pos_x < w - 1 {
        if let Some(c) = maze[pos_y as usize].chars().nth((pos_x + 1) as usize) {
            if c != '#' { dir[3] = true; }
        }
    }

    dir
}

fn find_spec_point(maze: &Vec<String>, spec_point: char) -> (i16, i16) {
    for (y, row) in maze.iter().enumerate() {
        if let Some(x) = row.find(spec_point) {
            return (x as i16, y as i16); // x = colonne, y = ligne
        }
    }
    panic!("Point '{}' non trouvé dans le labyrinthe", spec_point);
}

/// Affiche le labyrinthe
fn display_maze_solution(maze: &Vec<String>) {
    for s in maze {
        println!("{}", s);
    }
}

fn push_if_valid(
    x: i16,
    y: i16,
    parent: &Rc<RefCell<Node>>,
    frontier: &mut Vec<Rc<RefCell<Node>>>,
    explored: &Vec<Rc<RefCell<Node>>>,
    maze: &Vec<String>,
) {
    let h = maze.len() as i16;
    let w = maze[0].len() as i16;

    if x < 0 || y < 0 || x >= w || y >= h {
        return; // nœud hors labyrinthe
    }

    if contains_pos(frontier, x, y) || contains_pos(explored, x, y) {
        return; // déjà exploré
    }

    let new_node = Rc::new(RefCell::new(Node {
        x,
        y,
        parent: Some(parent.clone()),
    }));

    frontier.push(new_node);
}

fn main() -> std::io::Result<()> {

    let contenu = fs::read_to_string("a.txt")?;
    let mut maze: Vec<String> = contenu.lines().map(|l| l.to_string()).collect(); 

    let mut frontier: Vec<Rc<RefCell<Node>>> = Vec::new();
    let mut explored: Vec<Rc<RefCell<Node>>> = Vec::new();
    let mut path: Vec<(i16, i16)> = Vec::new();

    let pos_d = find_spec_point(&maze, 'D'); // départ
    let pos_a = find_spec_point(&maze, 'A'); // arrivée

    let root = Rc::new(RefCell::new(Node {
        x: pos_d.0,
        y: pos_d.1,
        parent: None,
    }));

    frontier.push(root);

    // ===== DFS =====
    while let Some(current) = frontier.pop() {

        let (cx, cy) = {
            let r = current.borrow();
            (r.x, r.y)
        };

        // ===== Objectif atteint =====
        if cx == pos_a.0 && cy == pos_a.1 {

            let mut temp = Some(current.clone());

            while let Some(rc) = temp {
                let r = rc.borrow();
                path.push((r.x, r.y));
                temp = r.parent.clone();
            }
            path.pop();
            path.reverse();
            path.pop();
            break;
        }

        explored.push(current.clone());

        let dir = move_dir(&maze, cx, cy);

        // === HAUT ===
        if dir[0] { push_if_valid(cx, cy - 1, &current, &mut frontier, &explored, &maze); }
        // === BAS ===
        if dir[1] { push_if_valid(cx, cy + 1, &current, &mut frontier, &explored, &maze); }
        // === GAUCHE ===
        if dir[2] { push_if_valid(cx - 1, cy, &current, &mut frontier, &explored, &maze); }
        // === DROITE ===
        if dir[3] { push_if_valid(cx + 1, cy, &current, &mut frontier, &explored, &maze); }

    }

    for (x, y) in &path {
        let row = &mut maze[*y as usize];
        let mut chars: Vec<char> = row.chars().collect();
        chars[*x as usize] = 'X';
        *row = chars.into_iter().collect();
    }

    display_maze_solution(&maze);

    Ok(())
}
