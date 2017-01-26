describe("Board", function() {

  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("initializes with a top left field set to null", function() {
    expect(board.fields[1]).toEqual(null);
  });

  it("initializes with a middle middle field set to null", function() {
    expect(board.fields[2]).toEqual(null);
  });
});
