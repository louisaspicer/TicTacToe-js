(function(exports) {

  function Game(board, playerOne, playerTwo, gameChecker) {
    this.board = board;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.gameChecker = gameChecker;
  }

  Game.prototype = {

    clickNought: function() {
      var nought = document.getElementById("O");
      var board = document.getElementById("board");
      var choices = document.getElementById("choices");
      self = this;
      nought.addEventListener("click", function() {
        self.pickTypeForPlayerOne("O");
        self.setTypeForPlayerTwo("X");
        board.style.display = block;
        choices.style.display = none;
      });
    },


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
