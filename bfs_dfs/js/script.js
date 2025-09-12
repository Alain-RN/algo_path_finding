const container = document.querySelector(".maze-container");
const btn = document.getElementById("btn");
let w_h = 30;
let frontier = [];
let visited = [];
let isDFS = true;
let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, "B", 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, "A", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const reset_maze = maze.map(row => [...row]); 


container.style.width = w_h * maze.length + "px";

const a = [1, 11];
const d = [13, 1];

btn.addEventListener("click", (e) => {
    e.preventDefault();
    isDFS = !isDFS;
    btn.textContent = isDFS ? "DFS" : "BFS";

    container.innerHTML = '';
    maze = reset_maze.map(row => [...row]);
    frontier = [d];
    visited = [];

    load_maze_view();

    startSearch();
});



frontier.push(d);
const load_maze_view = () => {
    container.innerHTML = ''
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            const c = document.createElement("span");
            c.style.width = `${w_h}px`;
            c.style.height = `${w_h}px`;
            if (maze[i][j] === 0) {
                c.style.background = "white";
            } else if (maze[i][j] === 1) {
                c.style.background = "black";
            } else if (maze[i][j] === 2) {
                c.style.background = "gray";
            } else if (maze[i][j] === "A") {
                c.style.background = "red";
            } else {
                c.style.background = "green";
            }
            container.appendChild(c);
        }
    }
}

const move = (maze, posX, posY) => {
    const inBounds = (x, y) => x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;

    return {
        left: inBounds(posX, posY - 1) && maze[posX][posY - 1] != 1 && maze[posX][posY - 1] != 2,
        right: inBounds(posX, posY + 1) && maze[posX][posY + 1] != 1 && maze[posX][posY + 1] != 2,
        top: inBounds(posX - 1, posY) && maze[posX - 1][posY] != 1 && maze[posX - 1][posY] != 2,
        bottom: inBounds(posX + 1, posY) && maze[posX + 1][posY] != 1 && maze[posX + 1][posY] != 2,
    };
}

function startSearch() {
    const useDFS = isDFS;

    function step() {
        if (frontier.length === 0) {
            console.log("No Solution");
            return;
        }

        const [x, y] = useDFS ? frontier.pop() : frontier.shift();

        if (x === a[0] && y === a[1]) {
            console.log("Arrivé !");
            load_maze_view();
            return;
        }

        const moves = move(maze, x, y);
        if (moves.left) frontier.push([x, y - 1]);
        if (moves.right) frontier.push([x, y + 1]);
        if (moves.top) frontier.push([x - 1, y]);
        if (moves.bottom) frontier.push([x + 1, y]);

        if (maze[x][y] !== "A" && maze[x][y] !== "B") {
            maze[x][y] = 2;
        }

        visited.push([x, y]);
        load_maze_view();

        setTimeout(step, 80);
    }

    step();
}








