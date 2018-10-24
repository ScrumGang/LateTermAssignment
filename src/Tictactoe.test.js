const GameBoard = require('./GameBoard');
const Tictactoe = require('./Tictactoe');

// Tictactoe.Tictactoe test
it('It should call Gameboard and create an empty gameboard', () => {
    const tic = new Tictactoe();
    for(var i = 0; i < tic.board.squares.length; i++) {
        expect(tic.board.squares[i]).toBe(" ");
    }
});
