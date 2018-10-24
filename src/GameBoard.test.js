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

it('isValidInput should returns false if input is not between 1 - 9', () => {
    const gb = new GameBoard();
    expect(gb.isValidInput(0)).toBe(false);
    expect(gb.isValidInput(10)).toBe(false);
});