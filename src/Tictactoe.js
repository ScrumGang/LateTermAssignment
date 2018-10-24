const GameBoard = require('./GameBoard');
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

const tic = new Tictactoe();
tic.showBoard();
//module.exports = Tictactoe;
