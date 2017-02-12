(function(exports){

  function GameChecker(board) {
    this.board = board;
    var self = this;
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
        if (self.board.fields[0] ===
          self.board.fields[1] &&
          self.board.fields[1] ===
          self.board.fields[2]) {
           return self.board.fields[0];
        }
      }
    },

    _isSecondRowComplete: function() {
      if (this.board.fields[3] !== null) {
        if (self.board.fields[3] ===
          self.board.fields[4] &&
          self.board.fields[4] ===
          self.board.fields[5]) {
           return self.board.fields[3];
          }
      }
    },

    _isThirdRowComplete: function() {
      if (this.board.fields[6] !== null) {
        if (self.board.fields[6] ===
          self.board.fields[7] &&
          self.board.fields[7] ===
          self.board.fields[8]) {
           return self.board.fields[6];
          }
      }
    },

    _isFirstColumnComplete: function() {
      if (this.board.fields[0] !== null) {
        if (self.board.fields[0] ===
          self.board.fields[3] &&
          self.board.fields[3] ===
          self.board.fields[6]) {
           return this.board.fields[0];
          }
      }
    },

    _isSecondColumnComplete: function() {
      if (this.board.fields[1] !== null) {
        if (self.board.fields[1] ===
          self.board.fields[4] &&
          self.board.fields[4] ===
          self.board.fields[7]) {
           return self.board.fields[1];
          }
      }
    },

    _isThirdColumnComplete: function() {
      if (this.board.fields[2] !== null) {
        if (self.board.fields[2] ===
          self.board.fields[5] &&
          self.board.fields[5] ===
          self.board.fields[8]) {
           return self.board.fields[2];
          }
      }
    },

    _isDiagonalLeftToRightComplete: function() {
      if (this.board.fields[0] !== null) {
        if (self.board.fields[0] ===
          self.board.fields[4] &&
          self.board.fields[4] ===
          self.board.fields[8]) {
           return self.board.fields[0];
          }
      }
    },

    _isDiagonalRightToLeftComplete: function() {
      if (this.board.fields[2] !== null) {
        if (self.board.fields[2] ===
          self.board.fields[4] &&
          self.board.fields[4] ===
          self.board.fields[6]) {
           return self.board.fields[2];
          }
      }
    }

  };

  exports.GameChecker = GameChecker;

})(this);
