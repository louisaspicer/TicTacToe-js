describe("Game", function() {

  var game;

  beforeEach(function() {
    board = jasmine.createSpyObj("board", ["fields"]);
    playerOne = jasmine.createSpyObj("playerOne", ["pickType", "type"]);
    playerTwo = jasmine.createSpyObj("playerTwo", ["pickType"]);
    gameChecker = jasmine.createSpyObj("gameChecker", ["runChecks"]);
    game = new Game(board, playerOne, playerTwo, gameChecker);
  });

  it("can pick player one's type", function() {
    game.pickTypeForPlayerOne("X");
    expect(game.playerOne.pickType).toHaveBeenCalledWith("X");
  });

  it("can pick player two's type", function() {
    game.setTypeForPlayerTwo("O");
    expect(game.playerTwo.pickType).toHaveBeenCalledWith("O");
  });

});
