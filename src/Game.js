(function(exports){

  function Game(board) {
    this.board = board;
    this._options = ["X", "O"];
  }

  Game.prototype = {
    isFirstRowComplete: function() {
      return this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[1]) > -1 &&
      this._options.indexOf(this.board.fields[2]) > -1;
    }
  }

  exports.Game = Game;

})(this);
