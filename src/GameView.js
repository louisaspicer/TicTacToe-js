(function(exports) {

  function GameView() {

  }

  GameView.prototype = {

    updatePageToPlay: function() {
      var title = document.createElement("h1");
      var text = document.createTextNode("Play Tic-Tac-Toe!");
      title.appendChild(text);
      var appDiv = document.getElementById("app");
      appDiv.insertBefore(title, appDiv.firstChild);
      this._makeBoardAppear();
    },

    addMarkerToBoard: function(marker, id) {
      element = document.createElement("h1");
      text = document.createTextNode(marker);
      element.appendChild(text);
      field = document.getElementById(id);
      field.appendChild(element);
    },

    _makeBoardAppear: function() {
      var board = document.getElementById("board");
      var choices = document.getElementById("choices");
      board.style.display = 'block';
      choices.style.display = 'none';
    },


  };
  exports.GameView = GameView;

})(this);
