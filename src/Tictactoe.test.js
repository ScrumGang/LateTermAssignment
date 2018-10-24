const GameBoard = require('./GameBoard');
const Tictactoe = require('./Tictactoe');

// Tictactoe.Tictactoe test
it('It should call Gameboard and create an empty gameboard', () => {
    const tic = new Tictactoe();
    for(var i = 0; i < tic.board.squares.length; i++) {
        expect(tic.board.squares[i]).toBe(" ");
    }
});

it('It should takeinput and put the X sign at the right place', () => {
    const tic = new Tictactoe();
	expect(tic.takeInput(1)).toBe(true);
	expect(tic.board.squares[0]).toBe("X");
});

it('It should takeinput and put the O sign at the right place after x has inserted first', () => {
    const tic = new Tictactoe();
	expect(tic.takeInput(1)).toBe(true);
	expect(tic.board.squares[0]).toBe("X");
	expect(tic.takeInput(2)).toBe(true);
	expect(tic.board.squares[1]).toBe("O");
});
