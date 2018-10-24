const GameBoard = require('./GameBoard');

it('constructor should initialize an array of size 9, filled with whitespaces', () => {
    const gb = new GameBoard();
    expect(gb.sqaures[0]).toBe(" ");
});

it('method should return hello world', () => {
    expect(GameBoard.method()).toBe("Hello, World!");
});