//Example constructor that sets name equal to parameter
function GameBoard(name) {
    this.name = name;
}

//Example function that returns "Hello, World!"
GameBoard.method = function() {
    return "Hello, World!";
}

module.exports = GameBoard;
