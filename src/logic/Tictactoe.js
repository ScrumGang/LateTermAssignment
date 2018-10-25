const GameBoard = require('./GameBoard');
const ScoreBoard = require('./ScoreBoard');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  })
//Example constructor that sets name equal to parameter
function Tictactoe() {
	this.gameBoard = new GameBoard();
	this.scoreBoard = new ScoreBoard();
	this.sign = 'X';
}

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
Tictactoe.prototype.showBoard = function() {
	console.log(this.gameBoard.squares[0] + "|" + this.gameBoard.squares[1] + "|" + this.gameBoard.squares[2]);
	console.log("- - -");
	console.log(this.gameBoard.squares[3] + "|" + this.gameBoard.squares[4] + "|" + this.gameBoard.squares[5]);
	console.log("- - -");
	console.log(this.gameBoard.squares[6] + "|" + this.gameBoard.squares[7] + "|" + this.gameBoard.squares[8]);
}

Tictactoe.prototype.startNewGame = function() {
	readline.question("Would you like to start a new game? (y/n)", (input) => {
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
			}
		}
	})
}

Tictactoe.prototype.play = function() {
		console.log("Scoreboard");
		console.log("X: " + this.scoreBoard.xWins + "-" + this.scoreBoard.oWins + " :O");
		this.showBoard();
		console.log("choose a number from 1-9");
		readline.question("It's " + this.sign + " turn", (input) => {
			this.takeInput(input);
			if(!this.gameBoard.isWinner('X') && !this.gameBoard.isWinner('O') && !this.gameBoard.isFull()) {
				this.play();
			}
			else {
				if(this.gameBoard.isFull()) {
					console.log("Draw");
				}
				else if(this.gameBoard.isWinner('X')) {
					this.scoreBoard.raiseWins('X');
					console.log('X won!');
				}
				else {
					this.scoreBoard.raiseWins('O');
					console.log('O won');
				}
				this.startNewGame();
			}
		  })
}

const tic = new Tictactoe();
tic.play();
module.exports = Tictactoe;
