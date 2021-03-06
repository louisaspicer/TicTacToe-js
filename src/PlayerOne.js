
(function(exports){

  function PlayerOne() {
    this.type = null;
    this.turn = true;
    this.name = "Player One";
  }

  PlayerOne.prototype = {

    pickType: function(type) {
      this.type = type;
    },

    playTurn: function(field, board) {
      board.fields[field] = this.type;
      this.turn = false;
    },
  };

  exports.PlayerOne = PlayerOne;

})(this);
