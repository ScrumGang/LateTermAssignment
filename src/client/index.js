require("../css/styles.css");
var GameBoard = require("../logic/GameBoard");
var ScoreBoard = require("../logic/ScoreBoard");

var squares = $(".square");
var leftScoreBoard = $("#left-scoreboard");
var rightScoreBoard = $("#right-scoreboard");
var currentSymbol = "X";
var gameOver = false;

var gameBoard = new GameBoard();
var scoreBoard = new ScoreBoard();

squares.on("click", function() {
    if(!gameOver) {
        if(currentSymbol === "X" && gameBoard.fillSquare(parseInt($(this).html()), "X")) {
            $(this).html(currentSymbol);
            if(gameBoard.isWinner(currentSymbol)) {
                raiseWins("X")
            }
            currentSymbol = "O";
        }
        else if(currentSymbol === "O" && gameBoard.fillSquare(parseInt($(this).html()), "O")) {
            $(this).html(currentSymbol);
            if(gameBoard.isWinner(currentSymbol)) {
                raiseWins("O")
            }
            currentSymbol = "X";
        }
    }
});

raiseWins = function(symbol) {
    gameOver = true;
    scoreBoard.raiseWins(symbol);
    if(symbol === "X") {
        leftScoreBoard.html("X has " + scoreBoard.xWins + " point/s!");
    }
    else if(symbol === "O") {
        rightScoreBoard.html("O has " + scoreBoard.oWins + " point/s!");
    }
}