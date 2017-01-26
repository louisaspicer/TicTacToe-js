(function(exports){

  function Game(board) {
    this.board = board;
    this._options = ["X", "O"];
  }

  Game.prototype = {

    runChecks: function() {
      return this._isFirstRowComplete() ||
      this._isSecondRowComplete() ||
      this._isThirdRowComplete() ||
      this._isFirstColumnComplete() ||
      this._isSecondColumnComplete() ||
      this._isThirdColumnComplete() ||
      this._isDiagonalLeftToRightComplete() ||
      this._isDiagonalRightToLeftComplete();
    },

    _isFirstRowComplete: function() {
      if (this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[1]) > -1 &&
      this._options.indexOf(this.board.fields[2]) > -1) {
        return this.board.fields[0];
      }
    },

    _isSecondRowComplete: function() {
      if (this._options.indexOf(this.board.fields[3]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[5]) > -1) {
        return this.board.fields[3];
      }
    },

    _isThirdRowComplete: function() {
      if (this._options.indexOf(this.board.fields[6]) > -1 &&
      this._options.indexOf(this.board.fields[7]) > -1 &&
      this._options.indexOf(this.board.fields[8]) > -1) {
        return this.board.fields[6];
      }
    },

    _isFirstColumnComplete: function() {
      if (this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[3]) > -1 &&
      this._options.indexOf(this.board.fields[6]) > -1) {
        return this.board.fields[0];
      }
    },

    _isSecondColumnComplete: function() {
      if (this._options.indexOf(this.board.fields[1]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[7]) > -1) {
        return this.board.fields[1];
      }
    },

    _isThirdColumnComplete: function() {
      if (this._options.indexOf(this.board.fields[2]) > -1 &&
      this._options.indexOf(this.board.fields[5]) > -1 &&
      this._options.indexOf(this.board.fields[8]) > -1) {
        return this.board.fields[2];
      }
    },

    _isDiagonalLeftToRightComplete: function() {
      if (this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[8]) > -1) {
        return this.board.fields[0];
      }
    },

    _isDiagonalRightToLeftComplete: function() {
      if (this._options.indexOf(this.board.fields[2]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[6]) > -1) {
        return this.board.fields[2];
      }
    }

  }

  exports.Game = Game;

})(this);
