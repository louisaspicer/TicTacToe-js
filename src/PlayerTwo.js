(function(exports){

  function PlayerTwo() {
    this.type = null;
  }

  PlayerTwo.prototype = {

    pickType: function(type) {
      this.type = type;
    },

    playTurn: function(field, board) {
      board.fields[field] = this.type;
      console.log(board.fields[field]);
    },
  };

  exports.PlayerTwo = PlayerTwo;

})(this);
