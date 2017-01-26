describe("Game", function() {

  var game;

  beforeEach(function() {
    board = jasmine.createSpyObj("board", ["fields"]);
    playerOne = jasmine.createSpyObj("playerOne", ["pickType", "type", "playTurn"]);
    playerTwo = jasmine.createSpyObj("playerTwo", ["pickType", "playTurn"]);
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

  it("returns if player one or two has won", function() {
    gameChecker.runChecks.and.returnValue("X");
    game.playerOne.type = "X";
    expect(game.runChecks()).toEqual("Player 1 is the winner!");
  });

  it("plays for player two if player one's turn is false", function() {
    game.playerOne.turn = false;
    game.playTurn(1);
    expect(game.playerTwo.playTurn).toHaveBeenCalled();
  });

  it("plays for player one if player one's turn is true", function() {
    game.playerOne.turn = true;
    game.playTurn(1);
    expect(game.playerOne.playTurn).toHaveBeenCalled();
  });

});
