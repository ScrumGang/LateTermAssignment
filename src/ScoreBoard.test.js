const ScoreBoard = require('./ScoreBoard');

it('method should return hello world', () => {
    expect(ScoreBoard.method()).toBe("Hello, World!");
});

it('method should return flesi', () => {
    const sb = new ScoreBoard("foo");
    expect(sb.name).toBe("foo");
});