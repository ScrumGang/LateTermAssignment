const GameBoard = require('./GameBoard');

it('constructor should initialize an array of size 9, filled with whitespaces', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.sqaures.length; i++) {
        expect(gb.sqaures[i]).toBe(" ");
    }
});

it('isValidInput should returns true if input is between 1 - 9', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.sqaures.length; i++) {
        expect(gb.isValidInput(i + 1)).toBe(true);
    }
});