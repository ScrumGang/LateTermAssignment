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

module.exports = Tictactoe;
