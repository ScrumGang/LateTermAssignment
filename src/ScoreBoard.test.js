const ScoreBoard = require('./ScoreBoard');

it('method should return hello world', () => {
    expect(ScoreBoard.method()).toBe("Hello, World!");
});

it('constructor should set name to foo', () => {
    const sb = new ScoreBoard("foo");
    expect(sb.name).toBe("foo");
});