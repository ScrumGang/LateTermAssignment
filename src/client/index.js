require("../css/styles.css");
var GameBoard = require("../logic/GameBoard");
var ScoreBoard = require("../logic/ScoreBoard");

var squares = $(".square");
//var squareList = $.makeArray(squares);
var leftScoreBoard = $("#left-scoreboard");
var rightScoreBoard = $("#right-scoreboard");
var moveAnnouncer = $("#board th");
var resetButton = $("#reset-button");
var currentSymbol = "X";
var gameOver = false;

var gameBoard = new GameBoard();
var scoreBoard = new ScoreBoard();

squares.on("click", function() {
    if(!gameOver) {
        if(currentSymbol === "X" && gameBoard.fillSquare(parseInt($(this).attr("id")), "X")) {
            $(this).html(currentSymbol);
            if(gameBoard.isWinner(currentSymbol)) {
                raiseWins("X")
            }
            else {
                currentSymbol = "O";
                moveAnnouncer.html("O, it's your turn!");
            }
        }
        else if(currentSymbol === "O" && gameBoard.fillSquare(parseInt($(this).attr("id")), "O")) {
            $(this).html(currentSymbol);
            if(gameBoard.isWinner(currentSymbol)) {
                raiseWins("O")
            }
            else {
                currentSymbol = "X";
                moveAnnouncer.html("X, it's your turn!");
            }
        }
    }
});

resetButton.on("click", function() {
    gameBoard.clearBoard();
    squares.html("");
    gameOver = false;
    currentSymbol = "X";
});

raiseWins = function(symbol) {
    gameOver = true;
    scoreBoard.raiseWins(symbol);
    if(symbol === "X") {
        moveAnnouncer.html("X wins!")
        leftScoreBoard.html("X has " + scoreBoard.xWins + " point/s!");
    }
    else if(symbol === "O") {
        moveAnnouncer.html("O wins!")
        rightScoreBoard.html("O has " + scoreBoard.oWins + " point/s!");
    }
}