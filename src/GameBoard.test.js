const GameBoard = require('./GameBoard');

// GameBoard.Gameboard() test
it('constructor should initialize an array of size 9, filled with whitespaces', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.squares.length; i++) {
        expect(gb.squares[i]).toBe(" ");
    }
});

// GameBoard.isValidinput(input) tests
it('isValidInput should return true if input is between 1 - 9 and corresponding square is empty', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.squares.length; i++) {
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
    gb.squares[3] = "X";
    expect(gb.isValidInput(4)).toBe(false);
});

// GameBoard.fillSquare(input, sign) tests
it('fillSquare should return fill square with parameter sign', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.squares.length; i++) {
        gb.fillSquare(i + 1, "X");
        expect(gb.squares[i]).toBe("X");
    }
});

it('fillSquare should return true upon successful insertion', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.squares.length; i++) {
        expect(gb.fillSquare(i + 1)).toBe(true);
    }
});

it('fillSquare should return false upon unsuccessful insertion', () => {
    const gb = new GameBoard();
    expect(gb.fillSquare(0)).toBe(false);
    expect(gb.fillSquare(10)).toBe(false);
    expect(gb.fillSquare(5)).toBe(true);
    expect(gb.fillSquare(5)).toBe(false);
});

// GameBoard.clearBoard() test
it('clearBoard should clear all squares', () => {
    const gb = new GameBoard();
    for(var i = 0; i < gb.squares.length; i++) {
        gb.squares[i] = "X";
    }
    gb.clearBoard();
    for(var i = 0; i < gb.squares.length; i++) {
        expect(gb.squares[i]).toBe(" ");
    }
});

// GameBoard.isWinnerHorizontal(sign) tests
it('isWinnerHorizontal should return true if any row is full', () => {
    const gb = new GameBoard();
    expect(gb.isWinnerHorizontal("X")).toBe(false);
    gb.squares[0] = "X";
    gb.squares[1] = "X";
    gb.squares[2] = "X";
    expect(gb.isWinnerHorizontal("X")).toBe(true);
    gb.squares[0] = " ";
    expect(gb.isWinnerHorizontal("X")).toBe(false);
    gb.squares[3] = "X";
    gb.squares[4] = "X";
    gb.squares[5] = "X";
    expect(gb.isWinnerHorizontal("X")).toBe(true);
    gb.squares[3] = " ";
    expect(gb.isWinnerHorizontal("X")).toBe(false);
    gb.squares[6] = "X";
    gb.squares[7] = "X";
    gb.squares[8] = "X";
    expect(gb.isWinnerHorizontal("X")).toBe(true);
});

// GameBoard.isWinnerVertical(sign) test
it('isWinnerVertical should return true if any column is full', () => {
    const gb = new GameBoard();
    expect(gb.isWinnerVertical("X")).toBe(false);
    gb.squares[0] = "X";
    gb.squares[3] = "X";
    gb.squares[6] = "X";
    expect(gb.isWinnerVertical("X")).toBe(true);
    gb.squares[0] = " ";
    expect(gb.isWinnerVertical("X")).toBe(false);
    gb.squares[1] = "X";
    gb.squares[4] = "X";
    gb.squares[7] = "X";
    expect(gb.isWinnerVertical("X")).toBe(true);
    gb.squares[1] = " ";
    expect(gb.isWinnerVertical("X")).toBe(false);
    gb.squares[2] = "X";
    gb.squares[5] = "X";
    gb.squares[8] = "X";
    expect(gb.isWinnerVertical("X")).toBe(true);
});

// GameBoard.isThreeFilled(sign, index1, index2, index3) test
it('Checks for three filled on all horizontal axis before and after filling them', () => {
    const gb = new GameBoard();
    expect(gb.isThreeFilled("X", 0, 1, 2)).toBe(false);
    gb.squares[0] = "X";
    gb.squares[1] = "X";
    gb.squares[2] = "X";
    expect(gb.isThreeFilled("X", 0, 1, 2)).toBe(true);
    expect(gb.isThreeFilled("X", 3, 4, 5)).toBe(false);
    gb.squares[3] = "X";
    gb.squares[4] = "X";
    gb.squares[5] = "X";
    expect(gb.isThreeFilled("X", 3, 4, 5)).toBe(true);
    expect(gb.isThreeFilled("X", 6, 7, 8)).toBe(false);
    gb.squares[6] = "X";
    gb.squares[7] = "X";
    gb.squares[8] = "X";
    expect(gb.isThreeFilled("X", 6, 7, 8)).toBe(true);
});