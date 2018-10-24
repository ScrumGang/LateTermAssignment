const GameBoard = require('./GameBoard');
//Example constructor that sets name equal to parameter
function Tictactoe() {
	this.board = new GameBoard();
	this.sign = 'X';
}

module.exports = Tictactoe;
