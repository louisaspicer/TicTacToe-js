(function(exports) {

  function GameView() {

  }

  GameView.prototype = {

    addMarkerToBoard: function(marker, id) {
      element = document.createElement("h1");
      center = document.createElement("center");
      text = document.createTextNode(marker);
      element.appendChild(text);
      center.appendChild(element);
      field = document.getElementById(id);
      field.appendChild(center);
    },

    makeBoardAppear: function() {
      var board = document.getElementById("board");
      var choices = document.getElementById("choices");
      board.style.display = 'block';
      choices.style.display = 'none';
    },

    showNextPlayerName: function(player) {
      // var player = player
      // var title = document.createElement("h1");
      // var text = document.createTextNode(player);
      // title.appendChild(text);
      var name = document.getElementById("player");
      name.innerHTML = player;
    }

  };
  exports.GameView = GameView;

})(this);
