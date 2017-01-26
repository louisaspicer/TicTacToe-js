(function(exports){

  function PlayerTwo() {
    this.type = null;
  }

  PlayerTwo.prototype = {

    pickType: function(type) {
      this.type = type;
    },

  };

  exports.PlayerTwo = PlayerTwo;

})(this);
