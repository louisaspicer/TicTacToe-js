(function(exports){

  function PlayerOne() {
    this.type = null;
    this.turn = true;
  }

  PlayerOne.prototype = {

    pickType: function(type) {
      this.type = type;
    },

    playTurn: function(field, board) {
      board.fields[field] = this.type;
    },
  }

  exports.PlayerOne = PlayerOne;

})(this);
