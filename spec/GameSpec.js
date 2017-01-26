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

    describe("First row", function() {
      it("returns false if theres no match", function() {
        expect(game.isFirstRowComplete()).toEqual(false);
      });

      it("returns true if all are X", function() {
        game.board.fields[0] = "X";
        game.board.fields[1] = "X";
        game.board.fields[2] = "X";
        expect(game.isFirstRowComplete()).toEqual(true);
      });

      it("returns true if all are O", function() {
        game.board.fields[0] = "O";
        game.board.fields[1] = "O";
        game.board.fields[2] = "O";
        expect(game.isFirstRowComplete()).toEqual(true);
      });

      it("returns false if not all match", function() {
        game.board.fields[0] = "O";
        expect(game.isFirstRowComplete()).toEqual(false);
      });
    });

    describe ("Second row", function() {
      it("returns true if all are X", function() {
        game.board.fields[3] = "X";
        game.board.fields[4] = "X";
        game.board.fields[5] = "X";
        expect(game.isSecondRowComplete()).toEqual(true);
      });
    })

    describe ("Third row", function() {
      it("returns true if all are X", function() {
        game.board.fields[6] = "X";
        game.board.fields[7] = "X";
        game.board.fields[8] = "X";
        expect(game.isThirdRowComplete()).toEqual(true);
      });
    })

  });

});
