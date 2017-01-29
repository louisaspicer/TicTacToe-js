(function(exports) {

  function Game(board, playerOne, playerTwo, gameChecker, gameView) {
    this.board = board;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.gameChecker = gameChecker;
    this.gameView = gameView;
  }

  Game.prototype = {

    clickNought: function() {
      var nought = document.getElementById("O");
      self = this;
      nought.addEventListener("click", function() {
        self.pickTypeForPlayerOne("O");
        self.setTypeForPlayerTwo("X");
        self.gameView.updatePageToPlay();
      });
    },

    clickCross: function() {
      var cross = document.getElementById("X");
      self = this;
      cross.addEventListener("click", function() {
        self.pickTypeForPlayerOne("X");
        self.setTypeForPlayerTwo("O");
        self.gameView.updatePageToPlay();
      });
    },

    makeSelection: function() {
      var fields = document.getElementsByClassName("container");
      self = this;
      for (i = 0; i < fields.length; i++) {
        fields[i].addEventListener("click", self.playTurn(i), true);
        console.log(fields[i]);
      }
    },

    pickTypeForPlayerOne: function(type) {
      this.playerOne.pickType(type);
    },

    setTypeForPlayerTwo: function(type) {
      this.playerTwo.pickType(type);
    },

    playTurn: function(id) {
      var self = this;
      if (self.playerOne.turn) {
        self.playerOne.playTurn(id, this.board);
        self.playerOne.turn = false;
        self.gameView.addMarkerToBoard(self.playerOne.type, id);
        self._runChecks();
      } else {
        self.playerTwo.playTurn(id, this.board);
        self.playerOne.turn = true;
        self.gameView.addMarkerToBoard(self.playerTwo.type, id);
        self._runChecks();
      }
    },

    _runChecks: function() {
      if (this.gameChecker.runChecks() !== undefined) {
        var type = this.gameChecker.runChecks();
        if (type === this.playerOne.type) {
          alert("Player 1 is the winner!");
        } else {
          alert("Player 2 is the winner!");
        }
      }
    },
  };

  exports.Game = Game;

})(this);
