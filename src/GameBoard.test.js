const GameBoard = require('./GameBoard');

it('method should return hello world', () => {
    expect(GameBoard.method()).toBe("Hello, World!");
});

it('constructor should set name to foo', () => {
    const gb = new GameBoard("foo");
    expect(gb.name).toBe("foo");
});