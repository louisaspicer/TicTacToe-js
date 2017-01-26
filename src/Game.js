(function(exports){

  function Game(board) {
    this.board = board;
  }

  Game.prototype = {
    checkFirstRow: function() {
      return false
    }
  }

  exports.Game = Game;

})(this);
