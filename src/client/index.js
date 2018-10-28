require("../css/styles.css");
var GameBoard = require("../logic/GameBoard");
var ScoreBoard = require("../logic/ScoreBoard");

var squares = document.getElementsByClassName("square");
var leftScoreBoard = document.getElementById("left-scoreboard");
var rightScoreBoard = document.getElementById("right-scoreboard");
var moveAnnouncer = document.getElementById("move-announcer");
var resetButton = document.getElementById("reset-button");
var currentSign = "X";
var gameOver = false;

var gameBoard = new GameBoard();
var scoreBoard = new ScoreBoard();

Array.prototype.forEach.call(squares, function(square) {
    square.addEventListener("click", function() {
        if(!gameOver && gameBoard.fillSquare(parseInt(square.getAttribute("id")), currentSign)) {
            square.innerHTML = currentSign;
            if(gameBoard.squaresFilled > 4 && gameBoard.isWinner(currentSign)) {
                raiseWins(currentSign)
            }
            else if(gameBoard.isFull()) {
                setDraw();
            }
            else if(currentSign === "X") {
                setcurrentSign("O")
            }
            else if(currentSign === "O") {
                setcurrentSign("X");
            }
        }
    });
});

resetButton.addEventListener("click", function() {
    gameBoard.clearBoard();
    Array.prototype.forEach.call(squares, function(square) {
        square.innerHTML = "";
    });
    gameOver = false;
    setcurrentSign("X");
});

function raiseWins(sign) {
    gameOver = true;
    scoreBoard.raiseWins(sign);
    moveAnnouncer.innerHTML = sign + " wins!";
    if(sign === "X") {
        leftScoreBoard.innerHTML = sign + " has " + scoreBoard.getWins(sign) + " point/s!";
    }
    else if(sign === "O") {
        rightScoreBoard.innerHTML = sign + " has " + scoreBoard.getWins(sign) + " point/s!";
    }
}

function setDraw() {
    gameOver = true;
    moveAnnouncer.innerHTML = "Draw!";
}

function setcurrentSign(sign) {
    currentSign = sign;
    moveAnnouncer.innerHTML = String(sign) + ", it's your turn!";
}