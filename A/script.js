let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 3, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; 



function input_element(id) {
    return document.getElementById(id);
}

const size = 18;
const container = document.querySelector(".maze-container");
container.style.width = maze[0].length * size + "px";
container.style.height = maze.length * size + "px";

const size_container = document.querySelector(".size");
size_container.innerHTML = maze.length + " blocs <br/>" + maze[0].length + " blocs"

const commmand_container = document.querySelector(".command");
const show_path = input_element("show_path");
const show_weigth = input_element("show_weigth");
window.onload = () => {
    commmand_container.style.left = `${size_container.offsetWidth + 8}px`;
};

function find_spec_point(maze, block_type) {
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] == block_type) {
                return {
                    x: j,
                    y: i,
                }
            }
        }
    }
    return null
}

function gen_block(block_type, b_result) {
    const block = document.createElement("div");
    block.className = "block";

    block.style.width = size + "px";
    block.style.height = size + "px";

    if (block_type == 0 || (block_type == 4 && !b_result)) {
        block.style.background = "black"
    } else if (block_type == 2) {
        block.style.background = "red";
        block.textContent = "D"
    } else if (block_type == 3) {
        block.style.background = "green";
        block.textContent = "A"
    } else if (block_type == 4 && b_result) {
        block.style.background = "white";
    }
    return block;
}

function manhattan_distance(point) {
    const target = find_spec_point(maze, 3);
    const x_distance = Math.abs(point.x - target.x);
    const y_distance = Math.abs(point.y - target.y);
    return {
        d: x_distance + y_distance,
    }
}
function display_maze(maze, show_weight, show_path) {
    container.innerHTML = "";
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            const block = gen_block(maze[i][j], show_path)
            if ((maze[i][j] == 0 || maze[i][j] == 4) && show_weight) {
                let point = {
                    x: j,
                    y: i
                }
                block.textContent = `${manhattan_distance(point).d}`
                if (maze[i][j] == 4 && show_path) {
                    block.style.color = "#000"
                }
            }
            container.append(block);
        }
    }
}

function move(node) {
    let t = false, b = false, l = false, r = false;
    if (maze[node.y - 1][node.x] != 1) {
        t = true
    }

    if (maze[node.y + 1][node.x] != 1) {
        b = true
    }

    if (maze[node.y][node.x - 1] != 1) {
        l = true
    }

    if (maze[node.y][node.x + 1] != 1) {
        r = true
    }

    return {
        t, b, l, r
    }
}

function distance_step_min(frontiere) {
    let min_f = frontiere[0].g + manhattan_distance(frontiere[0]).d;
    let index_min = 0;

    for (let i = 1; i < frontiere.length; i++) {
        let f = frontiere[i].g + manhattan_distance(frontiere[i]).d;
        if (f < min_f) {
            min_f = f;
            index_min = i;
        }
    }
    const value = frontiere[index_min]

    frontiere.splice(index_min, 1);

    return {
        value: value,
        index: index_min,
    }
}

function solve_maze() {
    const a = find_spec_point(maze, 2);

    let root = {
        x: a.x,
        y: a.y,
        parent: null,
        g: 0
    };

    let frontiere = [root];
    let explored = [];

    while (frontiere.length > 0) {
        const { value: node, index } = distance_step_min(frontiere);

        if (manhattan_distance(node).d == 0) {
            let way = node;
            while (way != null) {
                if (
                    !(manhattan_distance(way).d == 0) &&
                    !(way.x == a.x && way.y == a.y)
                ) {
                    maze[way.y][way.x] = 4
                }
                way = way.parent;
            }
            break;
        }


        explored.push(`${node.x},${node.y}`);

        if (move(node).t) {
            const child = { x: node.x, y: node.y - 1, parent: node, g: node.g + 1 };
            if (!explored.includes(`${child.x},${child.y}`) &&
                !frontiere.some(n => n.x === child.x && n.y === child.y)) {
                frontiere.push(child);
            }
        }

        if (move(node).b) {
            const child = { x: node.x, y: node.y + 1, parent: node, g: node.g + 1 };
            if (!explored.includes(`${child.x},${child.y}`) &&
                !frontiere.some(n => n.x === child.x && n.y === child.y)) {
                frontiere.push(child);
            }
        }

        if (move(node).l) {
            const child = { x: node.x - 1, y: node.y, parent: node, g: node.g + 1 };
            if (!explored.includes(`${child.x},${child.y}`) &&
                !frontiere.some(n => n.x === child.x && n.y === child.y)) {
                frontiere.push(child);
            }
        }

        if (move(node).r) {
            const child = { x: node.x + 1, y: node.y, parent: node, g: node.g + 1 };
            if (!explored.includes(`${child.x},${child.y}`) &&
                !frontiere.some(n => n.x === child.x && n.y === child.y)) {
                frontiere.push(child);
            }
        }
    }
}

solve_maze();

show_path.addEventListener("change", () => {
    display_maze(maze, show_weigth.checked, show_path.checked);
});

show_weigth.addEventListener("change", () => {
    display_maze(maze, show_weigth.checked, show_path.checked);
});

display_maze(maze, true, true);



