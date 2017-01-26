(function(exports){

  function PlayerOne() {
    this.type = null;
    this.turn = true;
  }

  PlayerOne.prototype = {

    pickType: function(type) {
      this.type = type;
    }

  }

  exports.PlayerOne = PlayerOne;

})(this);
