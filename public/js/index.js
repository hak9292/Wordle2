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

const logoutEl = document.querySelector('#logout-button')


//scoreboard
//const scoreModalEl = $('#score-modal');
//scoreModalEl.modal('hide')--where to put?

// Invoke createBoard when someone successfully logs in or
// when app fetches login data and logs user in automatically
function createBoard() {
    // loops through and creates rows w/ id's
    for (r = 0; r < rows.length; r++) {
        var rr = r + 1;
        var rowMaker = document.createElement('div');
        rowMaker.className = 'row boardRow';
        document.getElementById('twordle-game').appendChild(rowMaker);
        rowMaker.setAttribute('id', `row-${rr}`);
        // within loop, creates columns per row w/ id's per box
        for (c = 0; c < cols.length; c++) {
            var cc = c + 1;
            var boxNum = (r * 6) + (cc);
            var colMaker = document.createElement('div');
            // var tileMaker = document.createElement('div');
            // tileMaker.className = 'col-md-12 k-keys'
            colMaker.className = 'col boardCol';
            document.getElementById(`row-${r + 1}`).appendChild(colMaker);
            colMaker.setAttribute('id', (boxNum));
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
        goKey.className = 'col key go-del'
        var delKey = document.getElementById('key-del');
        delKey.className = 'col key go-del'
        delKey.style.color = "#EEA47F";
    }

window.addEventListener("DOMContentLoaded", function () {
    createBoard();
    createKeyboard();

    var rKeys = document.querySelectorAll(".kb-row button");
    // rKeys.forEach(function(a) {
    //     a.remove()
    //   })

    // goDel.parentNode.removeChild(goDel);
    var tries = [[]];
    var openBox = 1;
    var actualWord = "aaaaaa";
    var attempts = 0;

    for (i = 0; i < 28; i++) {
        rKeys[i].onclick = ({ target }) => {
            var pressedKey = target.getAttribute('data-letter');


            if (pressedKey === 'go') {
                pressGo();
                return;
            }
            if (pressedKey === 'del') {
                pressDel();
                return;
            }
            printLetter(pressedKey);

        }
    };
//*********still need to insert a else clause containing a check to see if it is a word*******
// function when user presses "go"
    function pressGo() {
        var userGuessArr = getCurrentArr();
        //
        var userGuess = userGuessArr.join('');
        attempts = attempts + 1;
        if (userGuessArr.length < 6) {
            window.alert('Word must be 6 letters!');
        }
        if (userGuess === actualWord) {
            window.alert('yes, indeed');
        } 
        if (attempts === 7) {
            window.alert(`dont be sorry, be better :). The word was ${actualWord}`);
        } 
        tries.push([]);
    }
    function pressDel() {
        var userGuessArr = getCurrentArr();
        userGuessArr.pop();
        tries[tries.length - 1] = userGuessArr;
        var lastLetterEl = document.getElementById(String(openBox - 1));
        lastLetterEl.textContent = "";
        openBox = openBox - 1;
    }
    function printLetter(pressedKey) {
        var userGuessArr = getCurrentArr();
        if (userGuessArr && userGuessArr.length < 6) {
            userGuessArr.push(pressedKey);
            var openBoxEl = document.getElementById(String(openBox));
            openBox = openBox + 1;
            openBoxEl.textContent = pressedKey;

        }
    }

    function getCurrentArr() {
        var numOfLetters = tries.length;
        return tries[numOfLetters - 1];
    }


    function logoutUser() {
        console.log('clicked');
        window.location.href = '../html/signup.html';

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "connect.sid=s%3AhScOiaMVHuYelsSBwRcSt2-vvILYBXWZ.ikGdAVJgCOiEvz5Jm5SSAU1k8Nh%2BFad4Nz1k457Jxpo");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("/api/users/logout", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                window.location.href = '../html/login.html'
              })
            .catch(error => console.log('error', error)); 
    }

    logoutEl.addEventListener('click', logoutUser)

})};