const GameBoard = require('./GameBoard');
const ScoreBoard = require('./ScoreBoard');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  })

/**
 * Tictactoe constructor that intializes the starting player a 'X' and initalizes an empty game board and score board.
 * @constructor
 * @property {GameBoard} gameBoard - Represents the tic tac toe gameboard.
 * @property {ScoreBoard} scoreBoard - Represents the tic tac toe scoreboard.
 * @property {char} sign - Represents the current player either 'X' or 'O'.
 */
function Tictactoe() {
	this.gameBoard = new GameBoard();
	this.scoreBoard = new ScoreBoard();
	this.sign = 'X';
}

/**Takes in an integer as a parameter and filles a square in the gameboard with the value of sign beetween 1-9 
 * corresponding to the value of input and then swaps the value of sign to 'X' or 'O' depending on the current value of sign. 
 * @param {integer} input - An integer value from 1-9 representing a square in the scoreboard.
 * @return {boolean} Returns whether or not input was a success.
 */
Tictactoe.prototype.takeInput = function(input) {
	if(this.gameBoard.isValidInput(input)) {
		if(this.gameBoard.fillSquare(input, this.sign)) {
			if(this.sign == 'X') {
				this.sign = 'O';
			}
			else {
				this.sign = 'X';
			}
			return true;
		}
	}
	else {
		return false;
	}
}

/**
 * Prints out the tic tac toe board to the console.
 */
Tictactoe.prototype.showBoard = function() {
	console.log(this.gameBoard.squares[0] + "|" + this.gameBoard.squares[1] + "|" + this.gameBoard.squares[2]);
	console.log("- - -");
	console.log(this.gameBoard.squares[3] + "|" + this.gameBoard.squares[4] + "|" + this.gameBoard.squares[5]);
	console.log("- - -");
	console.log(this.gameBoard.squares[6] + "|" + this.gameBoard.squares[7] + "|" + this.gameBoard.squares[8]);
}

/**
 * Sets the current player as 'X' and clears the game board and the score board
 */
Tictactoe.prototype.startNewGame = function() {
	readline.question("Would you like to start a new game? (y/n): ", (input) => {
		if(input != 'y' && input != 'n') {
			this.startNewGame();
		}
		else {
			if(input == 'y') {
				this.sign = 'X';
				this.gameBoard.clearBoard();
				this.play();
			}
			else {
				console.log("Goodbye");
				console.log("X: " + this.scoreBoard.xWins + "-" + this.scoreBoard.oWins + " :O");
				readline.close();
			}
		}
	})
}

/**
 * Starts a tic tac toe game, and calls itself recursively until either player wins or the game ends in a draw.
 * If either player wins raise either xWins og oWins in the score board depending if 'X' or 'O' won.
 */
Tictactoe.prototype.play = function() {
	console.log("Scoreboard");
	console.log("X: " + this.scoreBoard.xWins + "-" + this.scoreBoard.oWins + " :O");
	this.showBoard();
	console.log("choose a number from 1-9");
	readline.question("It's " + this.sign + " turn: ", (input) => {
		if(this.takeInput(input)){
			if(this.gameBoard.isWinner('X')) {
				this.scoreBoard.raiseWins('X');
				console.log('X won!');
				this.startNewGame();
			}
			else if(this.gameBoard.isWinner('O')){
				this.scoreBoard.raiseWins('O');
				console.log('O won');
				this.startNewGame();
			}
			else if(this.gameBoard.isFull()) {
				console.log("Draw");
				this.startNewGame();
			}
			else{
				this.play();
			}
		} else {
			this.play();
		}
	})
}

/*const tic = new Tictactoe();
tic.play();*/
module.exports = Tictactoe;
