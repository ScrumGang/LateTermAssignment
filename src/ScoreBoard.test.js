const ScoreBoard = require('./ScoreBoard');

it('constructor should set Xwins and O wins to 0', () => {
    const sb = new ScoreBoard();
    expect(sb.Xwins).toBe(0);
    expect(sb.Owins).toBe(0);
});

it('method should return hello world', () => {
    expect(ScoreBoard.method()).toBe("Hello, World!");
});

