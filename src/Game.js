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
      return this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[1]) > -1 &&
      this._options.indexOf(this.board.fields[2]) > -1;
    },

    _isSecondRowComplete: function() {
      return this._options.indexOf(this.board.fields[3]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[5]) > -1;
    },

    _isThirdRowComplete: function() {
      return this._options.indexOf(this.board.fields[6]) > -1 &&
      this._options.indexOf(this.board.fields[7]) > -1 &&
      this._options.indexOf(this.board.fields[8]) > -1;
    },

    _isFirstColumnComplete: function() {
      return this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[3]) > -1 &&
      this._options.indexOf(this.board.fields[6]) > -1;
    },

    _isSecondColumnComplete: function() {
      return this._options.indexOf(this.board.fields[1]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[7]) > -1;
    },

    _isThirdColumnComplete: function() {
      return this._options.indexOf(this.board.fields[2]) > -1 &&
      this._options.indexOf(this.board.fields[5]) > -1 &&
      this._options.indexOf(this.board.fields[8]) > -1;
    },

    _isDiagonalLeftToRightComplete: function() {
      return this._options.indexOf(this.board.fields[0]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[8]) > -1;
    },

    _isDiagonalRightToLeftComplete: function() {
      return this._options.indexOf(this.board.fields[2]) > -1 &&
      this._options.indexOf(this.board.fields[4]) > -1 &&
      this._options.indexOf(this.board.fields[6]) > -1;
    }

  }

  exports.Game = Game;

})(this);
