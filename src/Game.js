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
    },

    isSecondRowComplete: function() {
      return this._options.indexOf(this.board.fields[3]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[5]) > -1;
    },

    isThirdRowComplete: function() {
      return this._options.indexOf(this.board.fields[6]) > -1 &&
      this._options.indexOf(this.board.fields[7]) > -1 &&
      this._options.indexOf(this.board.fields[8]) > -1;
    },

    isFirstColumnComplete: function() {
      return this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[3]) > -1 &&
      this._options.indexOf(this.board.fields[6]) > -1;
    }

  }

  exports.Game = Game;

})(this);
