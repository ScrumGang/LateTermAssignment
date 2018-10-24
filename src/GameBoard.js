//Constructor
function GameBoard() {
    this.sqaures = new Array(9);
    for(var i = 0; i < this.sqaures.length; i++) {
        this.sqaures[i] = " ";
    }
}

GameBoard.prototype.isValidInput = function(input) {
    if(input > 0 && input < 10) {
        return true;
    }
    return false;
}

module.exports = GameBoard;
