
let YELLOW_COLOR = "yellow";

window.addEventListener("load", function () {
    let table = this.document.querySelector("#table");
    let N = 8, M = 8;
    let player = "knight";

    // chess grid creation.
    // ri: row index, ci: column index.
    for (let ri = 0; ri < N; ri++) {
        let tr = this.document.createElement("tr");
        let isWhite = ri % 2 === 0 ? true : false;
        for (let ci = 0; ci < M; ci++) {
            let cell = this.document.createElement("td");
            cell.setAttribute("class", `box ${isWhite ? "white" : "black"}`);
            cell.setAttribute("data-index", `${ri}-${ci}`);


            tr.appendChild(cell);
            isWhite = !isWhite;
        }
        table.appendChild(tr);
    }

    hoverEffect(table, N, M,player);
});


function hoverEffect(table, N, M,player) {
    let boxArr = document.querySelectorAll(".box");
    table.addEventListener("mouseover", (event) => {
        let dataIndex = event.target.dataset.index;
        if (dataIndex === undefined) {
            return;
        }

        let [curr_row, curr_col] = dataIndex.split("-").map(idx => idx);
        removeYellowColors(boxArr);

        storageOfPossibleMoves = possibleMoves(curr_row, curr_col, N, M,player);
        colorMyPossibleMoves(storageOfPossibleMoves, boxArr);
    });

    mouseLeave(table, boxArr);
}

function mouseLeave(table, boxArr) {
    table.addEventListener("mouseleave", () => {
        removeYellowColors(boxArr);
    });
}

// T: O(????) S:O(????)
// Readable, easy to extend with minimal changes.
function possibleMoves(curr_row, curr_col, N, M,player) {
    let directions = getDirection(player);
    let maxRadius = getMaximumRadius(N, M,player);

    let storageOfPossibleMoves = {};

    for (let dir of directions) {
        for (let radius = 0; radius <= maxRadius; radius++) {
            let newRow = parseInt(curr_row) + parseInt(radius * dir[0]);
            let newCol = parseInt(curr_col) + parseInt(radius * dir[1]);
            
            if (newRow >= 0 && newCol >= 0 && newRow < N && newCol < M) {
                let dataIndex = `${newRow}-${newCol}`;
                storageOfPossibleMoves[dataIndex] = true;
            } else {
                break;
            }
        }
    }

    return storageOfPossibleMoves;
}

function colorMyPossibleMoves(storageOfPossibleMoves, boxArr) {
    for (let boxCell of boxArr) {
        let curr_dataIndex = boxCell.dataset.index;
        if (storageOfPossibleMoves[curr_dataIndex]) {
            boxCell.classList.add(YELLOW_COLOR);
        }
    }
}

function removeYellowColors(boxArr) {
    for (let boxCell of boxArr) {
        boxCell.classList.remove(YELLOW_COLOR);
    }
}

function getDirection(player) {
    if (player === "bishop") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1]];
    } else if (player === "queen") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1], [0, 1], [1, 0], [0, -1], [-1, 0]];
    } else if (player === "rook") {
        return [[0, 1], [1, 0], [0, -1], [-1, 0]];
    } else if (player = "knight") {
        return [
            [-2, -1], [-1, -2], [1, -2], [2, -1],  // Up-left, Up-right
            [-2, 1], [-1, 2], [1, 2], [2, 1]       // Down-left, Down-right
        ];
    }
}

function getMaximumRadius(N, M,player) {
    if (player === "bishop") {
        return Math.max(N, M);
    } else if (player === "queen") {
        return Math.max(N, M);
    } else if (player === "rook") {
        return Math.max(N, M);
    } else if (player = "knight") {
        return 1;
    }
}

