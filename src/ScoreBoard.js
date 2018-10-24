//Example constructor that sets name equal to parameter
function ScoreBoard() {
    this.Xwins = 0;
    this.Owins = 0;
}

//Example function that returns "Hello, World!"
ScoreBoard.prototype.raiseWins = function(sign) {
    
    if(sign === "X") {
        this.Xwins++;
    }
    else if(sign === "O") {
        this.Owins++;
    }
}

module.exports = ScoreBoard;
