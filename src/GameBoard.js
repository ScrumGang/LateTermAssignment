//Constructor
function GameBoard() {
    //squaresFilled is initialized in clearBoard() call
    //decleration is kept in comment for readability's sake
    //this.squaresFilled = 0;
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
        this.squaresFilled++;
        return true;
    }
    return false;
}

GameBoard.prototype.isFull = function() {
    if(this.squaresFilled === 9) {
        return true;
    }
    return false;
}

GameBoard.prototype.clearBoard = function() {
    this.squaresFilled = 0;
    for(var i = 0; i < this.squares.length; i++) {
        this.squares[i] = " ";
    }
}

GameBoard.prototype.isWinner = function(sign) {
    if(this.isWinnerHorizontal(sign) || this.isWinnerVertical(sign) || this.isWinnerDiagonal(sign)) {
        return true;
    }
    return false;
}

GameBoard.prototype.isWinnerHorizontal = function(sign) {
    if(this.isThreeFilled(sign, 0, 1, 2) || this.isThreeFilled(sign, 3, 4, 5) || this.isThreeFilled(sign, 6, 7, 8)) {
        return true;
    }
    return false;
}

GameBoard.prototype.isWinnerVertical = function(sign) {
    if(this.isThreeFilled(sign, 0, 3, 6) || this.isThreeFilled(sign, 1, 4, 7) || this.isThreeFilled(sign, 2, 5, 8)) {
        return true;
    }
    return false;
}

GameBoard.prototype.isWinnerDiagonal = function(sign) {
    if(this.isThreeFilled(sign, 0, 4, 8) || this.isThreeFilled(sign, 2, 4, 6)) {
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
