describe("Game", function() {

  var game;
  var board;

  beforeEach(function() {
    board = jasmine.createSpyObj("board", ["fields"]);
    game = new Game(board);
  });

  it("initalizes a new board", function() {
    expect(game.board).toEqual(board);
  });

  describe("Checking the board", function() {
    it("checks the first row of board", function() {
      expect(game.checkFirstRow()).toEqual(false);
    });

    it("checks the first row of board", function() {
      game.board.fields[0] = "X";
      game.board.fields[1] = "X";
      game.board.fields[2] = "X";
      expect(game.checkFirstRow()).toEqual(true);
    });
  });

});
