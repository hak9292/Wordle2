const rows = ['1', '2', '3', '4', '5', '6', '7'];
const cols = ['1', '2', '3', '4', '5', '6'];
const keys = {
    r1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    r2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    r3: ['go', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'del']
};


// Invoke createBoard when someone successfully logs in or
// when app fetches login data and logs user in automatically
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

function createKeyboard() {
    // creating rows
    for (i = 0; i < Object.keys(keys).length; i++){
        var keyRowMaker = document.createElement('div');
        keyRowMaker.classname = 'row';
        document.getElementById('keyboard').appendChild(keyRowMaker);
        keyRowMaker.setAttribute('id', `k${i + 1}`);

        var keysR = `keys.r${i + 1}`;
        keysR.forEach(createKeys(i))
        function createKeys(i) {
        
            var keyMaker = document.createElement('div');
            keyMaker.className = 'col';
            document.getElementById(`k${i + 1}`).appendChild(keyMaker);
            keyMaker.setAttribute('id', `element`);
           };
    }
    // for (k = 0; k < keys.r1.length; k++) {
    //     var keyMaker = document.createElement('div');
    //     keyMaker.className = 'col';
    //     document.getElementById('k1').appendChild(keyMaker);
    //     keyMaker.setAttribute('id', `${keys.r1[k]}`);
    // }
    


    

}



window.onload = function() {
    console.log("loading script...");
    createBoard();
    createKeyboard();
};

