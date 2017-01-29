var board = new Board();
var playerOne = new PlayerOne();
var playerTwo = new PlayerTwo();
var gameChecker = new GameChecker(board);
var gameView = new GameView();
var TicTacToe = new Game(board, playerOne, playerTwo, gameChecker, gameView);

window.onload = function () {

  TicTacToe.clickNought();
  TicTacToe.clickCross();
  // TicTacToe.makeSelection();

  var fields = document.getElementsByClassName("container");
  for (i = 0; i < fields.length; i++) {
      fields[i].addEventListener("click", (function(i) {
          return function() {
              TicTacToe.playTurn(i);
          };
      }(i)));
  }

};
