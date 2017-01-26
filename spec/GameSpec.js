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
      expect(game.isFirstRowComplete()).toEqual(false);
    });

    it("checks the first row of board match for X", function() {
      game.board.fields[0] = "X";
      game.board.fields[1] = "X";
      game.board.fields[2] = "X";
      expect(game.isFirstRowComplete()).toEqual(true);
    });

    it("checks the first row of the board match for O", function() {
      game.board.fields[0] = "O";
      game.board.fields[1] = "O";
      game.board.fields[2] = "O";
      expect(game.isFirstRowComplete()).toEqual(true);
    });
  });

});
