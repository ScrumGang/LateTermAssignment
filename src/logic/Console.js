const Tictactoe = require('./Tictactoe');

function Console() {
    this.tictactoe = new Tictactoe();
    this.tictactoe.play();
}
Console();