const { header } = require("express/lib/request");
const { sortedIndex } = require("lodash");

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
        rowMaker.className = 'row boardRow';
        document.getElementById('twordle-game').appendChild(rowMaker);
        rowMaker.setAttribute('id', `row-${r + 1}`);
        // within loop, creates columns per row w/ id's per box
        for (c = 0; c < cols.length; c++) {
            var colMaker = document.createElement('div');
            // var tileMaker = document.createElement('div');
            // tileMaker.className = 'col-md-12 k-keys'
            colMaker.className = 'col boardCol';
            document.getElementById(`row-${r + 1}`).appendChild(colMaker);
            colMaker.setAttribute('id', (c + 1));
            // $(colMaker).html(c * 10);
            // document.getElementById(`r${r + 1}-col${c + 1}`).appendChild(tileMaker);
            // tileMaker.setAttribute('id', `r${r + 1}-col${c + 1}-tile`)
        };
    };
};

function createKeyboard() {
    // creating rows

    // discovered lodash.js--greatest thing that's ever happened to me
    _.forEach(keys, function (keyRow, i) {
        var keyRowMaker = document.createElement('div');
        keyRowMaker.className = 'row kb-row';
        document.getElementById('keyboard').appendChild(keyRowMaker);
        keyRowMaker.setAttribute('id', `k${i}`);
        _.forEach(keyRow, function (el) {
            var keyMaker = document.createElement('button');
            keyMaker.className = 'col key letters';
            document.getElementById(`k${i}`).appendChild(keyMaker);
            keyMaker.setAttribute('id', `key-${el}`);
            keyMaker.setAttribute('data-letter', el);
            $(keyMaker).html(el);
        });
    });
    setKBAttr();

    function setKBAttr() {
        var goKey = document.getElementById('key-go');
        goKey.style.color = "#A7BEAE";
        goKey.className = 'col key goDel'
        var delKey = document.getElementById('key-del');
        delKey.className = 'col key goDel'
        delKey.style.color = "#EEA47F";
    }

    
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
// function printInput() {
//     var pressedQ = $('#key-q');
//     var pressedW = $('#key-w');
//     var pressedE = $('#key-e');
//     var pressedR = $('#key-r');
//     var pressedT = $('#key-t');
//     var pressedY = $('#key-y');
//     var pressedU = $('#key-u');
//     var pressedI = $('#key-i');
//     var pressedO = $('#key-o');
//     var pressedP = $('#key-p');
//     var pressedA = $('#key-a');
//     var pressedS = $('#key-s');
//     var pressedD = $('#key-d');
//     var pressedF = $('#key-f');
//     var pressedG = $('#key-g');
//     var pressedH = $('#key-h');
//     var pressedJ = $('#key-j');
//     var pressedK = $('#key-k');
//     var pressedL = $('#key-l');
//     var pressedZ = $('#key-z');
//     var pressedX = $('#key-x');
//     var pressedC = $('#key-c');
//     var pressedV = $('#key-v');
//     var pressedB = $('#key-b');
//     var pressedN = $('#key-n');
//     var pressedM = $('#key-m');
//     var pressedGo = $('#key-go');
//     var pressedDel = $('#key-del');

//     pressedQ.on("click", setLetter());
//     pressedW.on("click", setLetter());
//     pressedE.on("click", setLetter());
//     pressedR.on("click", setLetter());
//     pressedT.on("click", setLetter());
//     pressedY.on("click", setLetter());
//     pressedU.on("click", setLetter());

//     function setletter() {
//         $(colMaker).html(c * 10);
//     }
// }
// for (k = 0; k < keys.r1.length; k++) {
//     var keyMaker = document.createElement('div');
//     keyMaker.className = 'col';
//     document.getElementById('k1').appendChild(keyMaker);
//     keyMaker.setAttribute('id', `${keys.r1[k]}`);
// }









window.addEventListener("DOMContentLoaded", function () {
    console.log("loading script...");
    createBoard();
    createKeyboard();

    var rKeys = document.querySelectorAll(".kb-row button");
    var tries = [[]];
    var openBox = 1;
    const correctWord = "apples";

    for (i = 0; i < 28; i++) {
        rKeys[i].onclick = ({ target }) => {
            var pressedKey = target.getAttribute('data-letter');
            printLetter(pressedKey);
            if (pressedKey === 'go') {
                sendWord();
                return;
            }
        }
    };
    function sendWord() {
        var currentWord = getCurrentWord();
        if (currentWord.length != 6) {
            window.alert("Word must be 6 letters!");
        } 
        if (currentWord === correctWord) {
            window.alert("yes, indeed")
        }
    }
    function printLetter(pressedKey) {
        var userCurrentGuess = getCurrentWord();
        if (userCurrentGuess && userCurrentGuess.length < 6) {
            userCurrentGuess.push(pressedKey);
            var openBoxEl = document.getElementById(String(openBox));
            openBox = openBox + 1;
            openBoxEl.textContent = pressedKey;
        }
    }
    function getCurrentWord() {
        var attempts = tries.length;
        return tries[attempts - 1];
    }
});