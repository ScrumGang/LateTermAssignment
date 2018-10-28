require("../css/styles.css");
var GameBoard = require("../logic/GameBoard");
var ScoreBoard = require("../logic/ScoreBoard");

var squares = document.getElementsByClassName("square");
var leftScoreBoard = document.getElementById("left-scoreboard");
var rightScoreBoard = document.getElementById("right-scoreboard");
var moveAnnouncer = document.getElementById("move-announcer");
var resetButton = document.getElementById("reset-button");
var currentSymbol = "X";
var gameOver = false;

var gameBoard = new GameBoard();
var scoreBoard = new ScoreBoard();

Array.prototype.forEach.call(squares, function(square) {
    square.addEventListener("click", function() {
        if(!gameOver && gameBoard.fillSquare(parseInt(square.getAttribute("id")), currentSymbol)) {
            square.innerHTML = currentSymbol;
            if(gameBoard.squaresFilled > 4 && gameBoard.isWinner(currentSymbol)) {
                raiseWins(currentSymbol)
            }
            else if(gameBoard.isFull()) {
                setDraw();
            }
            else if(currentSymbol === "X") {
                setCurrentSymbol("O")
            }
            else if(currentSymbol === "O") {
                setCurrentSymbol("X");
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
    setCurrentSymbol("X");
});

function raiseWins(symbol) {
    gameOver = true;
    scoreBoard.raiseWins(symbol);
    moveAnnouncer.innerHTML = symbol + " wins!";
    if(symbol === "X") {
        leftScoreBoard.innerHTML = symbol + " has " + scoreBoard.getWins(symbol) + " point/s!";
    }
    else if(symbol === "O") {
        rightScoreBoard.innerHTML = symbol + " has " + scoreBoard.getWins(symbol) + " point/s!";
    }
}

function setDraw() {
    gameOver = true;
    moveAnnouncer.innerHTML = "Draw!";
}

function setCurrentSymbol(symbol) {
    currentSymbol = symbol;
    moveAnnouncer.innerHTML = String(symbol) + ", it's your turn!";
}