const ScoreBoard = require('./ScoreBoard');

it('constructor should set Xwins and O wins to 0', () => {
    const sb = new ScoreBoard();
    expect(sb.xWins).toBe(0);
    expect(sb.oWins).toBe(0);
});

it('raiseWins(sign) should increment Xwins or Owins depending if sign is "X or "O"', () => {
    const sb = new ScoreBoard();
    sb.raiseWins("X");
    expect(sb.xWins).toBe(1);
    expect(sb.oWins).toBe(0);
    sb.raiseWins("O");
    expect(sb.xWins).toBe(1);
    expect(sb.oWins).toBe(1);
});

