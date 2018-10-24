//Example constructor that sets name equal to parameter
function GameBoard() {
    this.sqaures = new Array(9);
    for(var i = 0; i < this.sqaures.length; i++) {
        this.sqaures[i] = " ";
    }
}

//Example function that returns "Hello, World!"
GameBoard.method = function() {
    return "Hello, World!";
}

module.exports = GameBoard;
