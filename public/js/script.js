// Invoke createBoard when someone successfully logs in or
// when app fetches login data and logs user in automatically

const { lookup } = require("dns");
const { rawListeners } = require("process");

// function createBoard() {
//     for (i = 0; i < rows.length; id++) {
//         var board = document.createElement('div');
//         board.className = "row";
//         //set id of each row to row-1, row-2, etc
//         document.getElementById('#twordle-game').appendChild(board);
//     }
// }
function createBoard() {
    // loops through and creates rows w/ id's
for (r = 0; r < rows.length; r++) {
    var rowMaker = document.createElement('div');
    rowMaker.className = 'row';
    document.getElementById('twordle-game').appendChild(rowMaker);
    rowMaker.setAttribute('id', `row-${r + 1}`);
// within loop, creates columns per row w/ id's per box
    for (c = 0; c < cols.length; c++) {
    var colMaker = document.createElement('div');
    colMaker.className = 'col';
    document.getElementById(`row-${r + 1}`).appendChild(colMaker);
    colMaker.setAttribute('id', `r${r + 1}-col${c + 1}`);
};};};

window.onload = function() {
    createBoard();
}

const rows = ['1', '2', '3', '4', '5', '6', '7'];
const cols = ['1', '2', '3', '4', '5', '6'];