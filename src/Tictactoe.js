const GameBoard = require('./GameBoard');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  })
//Example constructor that sets name equal to parameter
function Tictactoe() {
	this.board = new GameBoard();
	this.sign = 'X';
}

Tictactoe.prototype.takeInput = function(input) {
	if(this.board.isValidInput(input)) {
		if(this.board.fillSquare(input, this.sign)) {
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
	console.log(this.board.squares[0] + "|" + this.board.squares[1] + "|" + this.board.squares[2]);
	console.log("- - -");
	console.log(this.board.squares[3] + "|" + this.board.squares[4] + "|" + this.board.squares[5]);
	console.log("- - -");
	console.log(this.board.squares[6] + "|" + this.board.squares[7] + "|" + this.board.squares[8]);
}

Tictactoe.prototype.play = function() {
		this.showBoard();
		console.log("choose a number from 1-9");
		readline.question("It's " + this.sign + " turn", (name) => {
			this.takeInput(name);
			if(!this.board.isWinner('X') && !this.board.isWinner('O') && !this.board.isFull()) {
				this.play();
			}
			else {
				if(this.board.isFull()) {
					console.log("Draw");
				}
				else if(this.board.isWinner('X')) {
					console.log('X won!');
				}
				else {
					console.log('O won');
				}
			}
		  })
}

const tic = new Tictactoe();
tic.play();
//module.exports = Tictactoe;
