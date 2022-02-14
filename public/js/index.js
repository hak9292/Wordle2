const rows = ['1', '2', '3', '4', '5', '6', '7'];
const cols = ['1', '2', '3', '4', '5', '6'];
const keys = {
    r1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    r2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    r3: ['go', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'del']
};
const row1Count = keys.r1.length;
const row2Count = keys.r2.length;
const row3Count = keys.r3.length;

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
    
    // discovered lodash.js--greatest thing that's ever happened to me
   _.forEach(keys, function(keyRow, i) {
    var keyRowMaker = document.createElement('div');
    keyRowMaker.className = 'row';
    document.getElementById('keyboard').appendChild(keyRowMaker);
    keyRowMaker.setAttribute('id', `k${i}`);
    _.forEach(keyRow, function(el){
        var keyMaker = document.createElement('div');
        keyMaker.className = 'col';
        document.getElementById(`k${i}`).appendChild(keyMaker);
        keyMaker.setAttribute('id', `key-${el}`);
        $(keyMaker).html(el);
    });
   });

/*






*/


        // for (let [key, name] of Object.entries(`keys.r${i + 1}`)){
        //     // console.log(Object.keys(keys).length);
        //     console.log(key + ': ' + name);
        //     var keyMaker = document.createElement('div');
        //     keyMaker.className = 'col';
        //     document.getElementById(`k${i + 1}`).appendChild(keyMaker);
        //     keyMaker.setAttribute('id', `element`);
            // key is r1, r2, r3
            // name is the letters q, w, e, r, t, y, etc 
        


        // var keysR = `keys.r${i + 1}`;
        // keysR.forEach(createKeys(i))
        // function createKeys(i) {
        
        //     var keyMaker = document.createElement('div');
        //     keyMaker.className = 'col';
        //     document.getElementById(`k${i + 1}`).appendChild(keyMaker);
        //     keyMaker.setAttribute('id', `element`);
        //    };
    }
    // for (k = 0; k < keys.r1.length; k++) {
    //     var keyMaker = document.createElement('div');
    //     keyMaker.className = 'col';
    //     document.getElementById('k1').appendChild(keyMaker);
    //     keyMaker.setAttribute('id', `${keys.r1[k]}`);
    // }
    


    





window.onload = function() {
    console.log("loading script...");
    createBoard();
    createKeyboard();
};

