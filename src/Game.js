(function(exports){

  function Game(board) {
    this.board = board;
  }

  Game.prototype = {
    checkFirstRow: function() {
      return this.board.fields[0] === "X" &&
      this.board.fields[1] === "X" &&
      this.board.fields[2] === "X";
    }
  }

  exports.Game = Game;

})(this);
