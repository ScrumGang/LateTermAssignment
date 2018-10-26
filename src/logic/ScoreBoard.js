/**
 * ScoreBoard constructor the initializes xWins and oWins as 0.
 * @constructor
 * @property {integer} xWins - Stores the number of games that 'X' has won.
 * @property {integer} oWins - Stores the number of games that 'O' has won.
 */
function ScoreBoard() {
    this.xWins = 0;
    this.oWins = 0;
}

/**
 * Increments either xWins or oWins depending on whether the value of sign is "X" or "O".
 */
ScoreBoard.prototype.raiseWins = function(sign) {
    if(sign === "X") {
        this.xWins++;
    }
    else if(sign === "O") {
        this.oWins++;
    }
}

/**
 * Sets xWins and oWins to 0.
 */
ScoreBoard.prototype.clearScores = function() {
    this.xWins = 0;
    this.oWins = 0;
}

module.exports = ScoreBoard;
