let TicTacToe = document.querySelector('.app');
let playArea = document.getElementById('area');
let field = document.querySelector('.field');

let resultBlock = document.querySelector('.result');
let resultText = document.querySelector('.result_txt');
// resultText.classList.add('.result_txt');

let newGameBtn = document.querySelector('.areaBtn');
newGameBtn.classList.add('.areaBtn');

let result = '';
let move = 0;
let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

playArea.addEventListener('click', function(event) {
    if (event.target.className = 'field') {
        event.target.innerHTML = 'x';
    }

    if (move % 2 == 1) {
        event.target.innerHTML = 'o';
    }
    
    move++;

    check();
});

const check = function() {
    let field2 = document.getElementsByClassName('field');

    for (let i = 0; i < arr.length; i++) {
        if (field2[arr[i][0]].innerHTML == 'x' && field2[arr[i][1]].innerHTML == 'x' && field2[arr[i][2]].innerHTML == 'x') {
            result = 'Cross';
            showResult(result);
        } else if (field2[arr[i][0]].innerHTML == 'o' && field2[arr[i][1]].innerHTML == 'o' && field2[arr[i][2]].innerHTML == 'o') {
            result = 'Zero';
            showResult(result);
        }
    }
};

const showResult = function(win) {
    resultText.innerHTML = `Winner ${win} !!!`;
    resultBlock.style.display = 'flex';
};

const btnReloadHover = () => {
    newGameBtn.style.transform = 'scale(1.02)';
}

const btnReloadHover2 = () => {
    newGameBtn.style.transform = 'scale(1)';
}

const reloadGame = function() {
    location.reload();
};

newGameBtn.addEventListener('click', reloadGame);
newGameBtn.addEventListener('mouseover', btnReloadHover);
newGameBtn.addEventListener('mouseout', btnReloadHover2);