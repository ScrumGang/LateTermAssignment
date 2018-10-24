//Example constructor that sets name equal to parameter
function ScoreBoard() {
    this.Xwins = 0;
    this.Owins = 0;
}

//Example function that returns "Hello, World!"
ScoreBoard.method = function(sign) {
    return "Hello, World!";
}

module.exports = ScoreBoard;
