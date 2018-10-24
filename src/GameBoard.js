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
    if(this.isWinnerHorizontal1(sign) || this.isWinnerHorizontal2(sign) || this.isWinnerHorizontal3(sign)) {
        return true;
    }
    return false;
}

GameBoard.prototype.isWinnerHorizontal1 = function(sign) {
    if(this.squares[0] === sign && this.squares[1] === sign && this.squares[2] === sign) {
        return true;
    }
    return false;
}

GameBoard.prototype.isWinnerHorizontal2 = function(sign) {
    if(this.squares[3] === sign && this.squares[4] === sign && this.squares[5] === sign) {
        return true;
    }
    return false;
}

GameBoard.prototype.isWinnerHorizontal3 = function(sign) {
    if(this.squares[6] === sign && this.squares[7] === sign && this.squares[8] === sign) {
        return true;
    }
    return false;
}

module.exports = GameBoard;
