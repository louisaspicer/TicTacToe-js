(function(exports){

  function GameChecker(board) {
    this.board = board;
    this._options = ["X", "O"];
  }

  GameChecker.prototype = {

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
      if (this.board.fields[0] !== null) {
        if (this.board.fields[0] ===
          this.board.fields[1] &&
          this.board.fields[2]) {
           return this.board.fields[0];
          }
      }
    },

    _isSecondRowComplete: function() {
      if (this.board.fields[3] !== null) {
        if (this.board.fields[3] ===
          this.board.fields[4] &&
          this.board.fields[5]) {
           return this.board.fields[3];
          }
      }
    },

    _isThirdRowComplete: function() {
      if (this.board.fields[6] !== null) {
        if (this.board.fields[6] ===
          this.board.fields[7] &&
          this.board.fields[8]) {
           return this.board.fields[6];
          }
      }
    },

    _isFirstColumnComplete: function() {
      if (this.board.fields[0] !== null) {
        if (this.board.fields[0] ===
          this.board.fields[3] &&
          this.board.fields[6]) {
           return this.board.fields[0];
          }
      }
    },

    _isSecondColumnComplete: function() {
      if (this.board.fields[1] !== null) {
        if (this.board.fields[1] ===
          this.board.fields[4] &&
          this.board.fields[7]) {
           return this.board.fields[1];
          }
      }
    },

    _isThirdColumnComplete: function() {
      if (this.board.fields[2] !== null) {
        if (this.board.fields[2] ===
          this.board.fields[5] &&
          this.board.fields[8]) {
           return this.board.fields[2];
          }
      }
    },

    _isDiagonalLeftToRightComplete: function() {
      if (this.board.fields[0] !== null) {
        if (this.board.fields[0] ===
          this.board.fields[4] &&
          this.board.fields[8]) {
           return this.board.fields[0];
          }
      }
    },

    _isDiagonalRightToLeftComplete: function() {
      if (this.board.fields[2] !== null) {
        if (this.board.fields[2] ===
          this.board.fields[4] &&
          this.board.fields[6]) {
           return this.board.fields[2];
          }
      }
    }

  };

  exports.GameChecker = GameChecker;

})(this);
