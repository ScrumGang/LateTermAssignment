//Constructor
function GameBoard() {
    this.squares = new Array(9);
    this.clearBoard();
}

GameBoard.prototype.isValidInput = function(input) {
    if(input > 0 && input < 10 && this.squares[input - 1] === " ") {
        return true;
    }
    return false;
}

GameBoard.prototype.fillSquare = function(input, sign) {
    if(this.isValidInput(input)) {
        this.squares[input - 1] = sign;
        return true;
    }
    return false;
}

GameBoard.prototype.clearBoard = function() {
    for(var i = 0; i < this.squares.length; i++) {
        this.squares[i] = " ";
    }
}

GameBoard.prototype.isWinnerHorizontal = function(sign) {
    if(this.isThreeFilled(sign, 0, 1, 2) || this.isThreeFilled(sign, 3, 4, 5) || this.isThreeFilled(sign, 6, 7, 8)) {
        return true;
    }
    return false;
}

GameBoard.prototype.isThreeFilled = function(sign, index1, index2, index3) {
    if(this.squares[index1] === sign && this.squares[index2] === sign && this.squares[index3] === sign) {
        return true;
    }
    return false;
}

module.exports = GameBoard;
