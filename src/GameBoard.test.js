const GameBoard = require('./GameBoard');

// GameBoard.Gameboard() test
it('constructor should initialize an array of size 9, filled with whitespaces', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.sqaures.length; i++) {
        expect(gb.sqaures[i]).toBe(" ");
    }
});

// GameBoard.isValidinput(input) tests
it('isValidInput should return true if input is between 1 - 9 and corresponding square is empty', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.sqaures.length; i++) {
        expect(gb.isValidInput(i + 1)).toBe(true);
    }
});

it('isValidInput should return false if input is not between 1 - 9', () => {
    const gb = new GameBoard();
    expect(gb.isValidInput(0)).toBe(false);
    expect(gb.isValidInput(10)).toBe(false);
});

it('isValidInput should return false if corresponding square is not empty', () => {
    const gb = new GameBoard();
    gb.sqaures[3] = "X";
    expect(gb.isValidInput(4)).toBe(false);
});

// GameBoard.fillSquare(input, sign) tests
it('fillSquare should return fill square with parameter sign', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.sqaures.length; i++) {
        gb.fillSqaure(i + 1, "X");
        expect(gb.sqaures[i]).toBe("X");
    }
});

it('fillSquare should return true upon successful insertion', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.sqaures.length; i++) {
        expect(gb.fillSqaure(i + 1)).toBe(true);
    }
});

it('fillSquare should return false upon unsuccessful insertion', () => {
    const gb = new GameBoard();
    expect(gb.fillSqaure(0)).toBe(false);
    expect(gb.fillSqaure(10)).toBe(false);
    expect(gb.fillSqaure(5)).toBe(true);
    expect(gb.fillSqaure(5)).toBe(false);
});