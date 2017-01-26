describe("Game", function() {

  var game;
  var board;

  beforeEach(function() {
    board = jasmine.createSpyObj("board", ["fields"]);
    game = new Game(board);
  });

  it("initalizes a new board", function() {
    board.fields.and.returnValue([
      null, null, null,
      null, null, null,
      null, null, null
    ]);
    expect(game.board).toEqual([
      null, null, null,
      null, null, null,
      null, null, null
    ]);
  });

});
