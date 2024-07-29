let btn = document.querySelectorAll('.box');
let winner = document.getElementById('winner');
let winnerMsg = document.getElementById('winner-msg');
let scoreCounter = document.getElementById('counter');
let player1 = true;
let oWins = 0;
let xWins = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

btn.forEach((button) => {
    button.addEventListener("click", () => {
        if (player1) {
            button.textContent = "O";
            player1 = false;

        } else {
            button.textContent = "X";
            player1 = true;
        }

        button.disabled = true;
        checkWin();
    })
});


const checkWin = () => {
    for (let pattern of winPattern) {
        let pos1Val = btn[pattern[0]].textContent;
        let pos2Val = btn[pattern[1]].textContent;
        let pos3Val = btn[pattern[2]].textContent;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                if (pos1Val === "O") {
                    oWins++;
                    scoreCounter.textContent = `SCORE : ${oWins} : ${xWins}`;
                    winner.textContent = `${pos1Val} is Winner.`;
                    winnerMsg.classList.add('win-msg-show');
                    disableBox();
                } else {
                    xWins++;
                    scoreCounter.textContent = `SCORE : ${oWins} : ${xWins}`;
                    winner.textContent = `${pos1Val} is Winner.`;
                    winnerMsg.classList.add('win-msg-show');
                    disableBox();
                }
            }
        }
    }
}

const disableBox = () => {
    for (let box of btn) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for (let box of btn) {
        box.disabled = false;
        box.textContent = "";
    }
}

const resetGame = () => {
    player1 = true;
    enableBox();

}

const ok = () => {
    winnerMsg.classList.remove('win-msg-show');
    setTimeout(() => {
        resetGame();
    }, 750);
}

// CHANGING UI DARK THEME LIGHT THEME


const body = document.body;
const checkbox = document.getElementById('toggleBtn');
const header = document.querySelector('.header');
const mainHead = document.querySelector('.head h2');
const footer = document.querySelector('.footer');
const container = document.querySelector('.container');
const rstbtn = document.querySelector('.game-btn');
const toggleTheme = () => {
    if (checkbox.checked) {
        body.style.backgroundColor = "#00258b"
        header.style.color = mainHead.style.color = footer.style.color = rstbtn.style.color = "#fff";
        rstbtn.style.border = "2px solid white";
    } else {
        body.style.backgroundColor = "#00258bd9"  //#e15a0f
        header.style.color = mainHead.style.color = footer.style.color = rstbtn.style.color = "#000";
        rstbtn.style.border = "2px solid black";
    }
}