(function(exports){

  function PlayerOne() {
    this.type = null;
  }

  PlayerOne.prototype = {

    pickType: function(type) {
      this.type = type;
    }

  }

  exports.PlayerOne = PlayerOne;

})(this);
