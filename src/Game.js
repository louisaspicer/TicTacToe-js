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
        self.gameView.makeBoardAppear();
        self.gameView.showNextPlayerName(self.playerOne.name);
      });
    },

    clickCross: function() {
      var cross = document.getElementById("X");
      self = this;
      cross.addEventListener("click", function() {
        self.pickTypeForPlayerOne("X");
        self.setTypeForPlayerTwo("O");
        self.gameView.makeBoardAppear();
        self.gameView.showNextPlayerName(self.playerOne.name);
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
        self.gameView.showNextPlayerName(self.playerTwo.name);
        self.playerOne.playTurn(id, this.board);
        self.playerOne.turn = false;
        self.gameView.addMarkerToBoard(self.playerOne.type, id);
        self._runChecks();
      } else {
        self.gameView.showNextPlayerName(self.playerOne.name);
        self.playerTwo.playTurn(id, this.board);
        self.playerOne.turn = true;
        self.gameView.addMarkerToBoard(self.playerTwo.type, id);
        self._runChecks();
      }
    },

    _runChecks: function() {
      var type = this.gameChecker.runChecks();
      console.log(type);
      if (type !== undefined) {
        if (type === this.playerOne.type) {
          console.log("Player 1 is the winner!");
        } else {
          console.log("Player 2 is the winner!");
        }
      }
    },
  };

  exports.Game = Game;

})(this);
