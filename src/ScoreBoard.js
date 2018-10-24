//Constructor that initializes Xwins and Owins as 0
function ScoreBoard() {
    this.xWins = 0;
    this.oWins = 0;
}

//Increments either Xwins or Owins depending if sign is "X" or "O"
ScoreBoard.prototype.raiseWins = function(sign) {
    if(sign === "X") {
        this.xWins++;
    }
    else if(sign === "O") {
        this.oWins++;
    }
}

//Sets xWins and oWins to 0
ScoreBoard.prototype.clearScores = function() {
    this.xWins = 0;
    this.oWins = 0;
}

module.exports = ScoreBoard;
