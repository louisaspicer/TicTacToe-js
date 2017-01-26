(function(exports) {

  function Game(board, playerOne, playerTwo, gameChecker) {
    this.board = board;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.gameChecker = gameChecker;
  }

  Game.prototype = {
    pickTypeForPlayerOne: function(type) {
      this.playerOne.pickType(type);
    },

    setTypeForPlayerTwo: function(type) {
      this.playerTwo.pickType(type);
    },

    playTurn: function(idForImgClick) {
      if (this.playerOne.turn) {
        this.playerOne.playTurn(idForImgClick, this.board);
      } else {
        this.playerTwo.playTurn(idForImgClick, this.board);
        this.playerOne.turn = true;
      }
    },

    runChecks: function() {
      if (this.gameChecker.runChecks() !== undefined) {
        var type = this.gameChecker.runChecks();
        if (type === this.playerOne.type) {
          return "Player 1 is the winner!";
        } else {
          return "Player 2 is the winner!";
        }
      }
    },

  };


  exports.Game = Game;

})(this);
