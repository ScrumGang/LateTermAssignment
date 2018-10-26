const gameBoard = require("./index");

describe("GameBoard", () => {
  it("should return gameboard string", () => {
    expect(gameBoard("0000X0000")).toBe("0000X0000");
  });
});