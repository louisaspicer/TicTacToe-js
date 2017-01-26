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
  });

});
