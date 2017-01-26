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
  }


  exports.Game = Game;

})(this);
