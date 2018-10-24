//Constructor
function GameBoard() {
    this.sqaures = new Array(9);
    for(var i = 0; i < this.sqaures.length; i++) {
        this.sqaures[i] = " ";
    }
}

module.exports = GameBoard;
