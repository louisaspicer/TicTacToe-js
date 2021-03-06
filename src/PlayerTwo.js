(function(exports){

  function PlayerTwo() {
    this.type = null;
    this.name = "Player Two"
  }

  PlayerTwo.prototype = {

    pickType: function(type) {
      this.type = type;
    },

    playTurn: function(field, board) {
      board.fields[field] = this.type;
    },
  };

  exports.PlayerTwo = PlayerTwo;

})(this);
