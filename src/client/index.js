require("../css/styles.css");
var GameBoard = require("../logic/GameBoard");
var ScoreBoard = require("../logic/ScoreBoard");

var squares = $(".square");
var leftScoreBoard = $("#left-scoreboard");
var rightScoreBoard = $("#right-scoreboard");
var moveAnnouncer = $("#board th");
var resetButton = $("#reset-button");
var currentSymbol = "X";
var gameOver = false;

var gameBoard = new GameBoard();
var scoreBoard = new ScoreBoard();

squares.on("click", function() {
    if(!gameOver && gameBoard.fillSquare(parseInt($(this).attr("id")), currentSymbol)) {
        $(this).html(currentSymbol);
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

resetButton.on("click", function() {
    gameBoard.clearBoard();
    squares.html("");
    gameOver = false;
    setCurrentSymbol("X");
});

raiseWins = function(symbol) {
    gameOver = true;
    scoreBoard.raiseWins(symbol);
    moveAnnouncer.html(symbol + " wins!")
    if(symbol === "X") {
        leftScoreBoard.html(symbol + " has " + scoreBoard.getWins(symbol) + " point/s!");
    }
    else if(symbol === "O") {
        rightScoreBoard.html(symbol + " has " + scoreBoard.getWins(symbol) + " point/s!");
    }
}

setDraw = function() {
    gameOver = true;
    moveAnnouncer.html("Draw!");
}

setCurrentSymbol = function(symbol) {
    currentSymbol = symbol;
    moveAnnouncer.html(symbol + ", it's your turn!");
}