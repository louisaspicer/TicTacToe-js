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
      it("returns true if all are X", function() {
        game.board.fields[0] = "X";
        game.board.fields[1] = "X";
        game.board.fields[2] = "X";
        expect(game._isFirstRowComplete()).toEqual("X");
      });

      it("returns true if all are O", function() {
        game.board.fields[0] = "O";
        game.board.fields[1] = "O";
        game.board.fields[2] = "O";
        expect(game._isFirstRowComplete()).toEqual("O");
      });

      it("returns undefined if not all match", function() {
        game.board.fields[0] = "O";
        expect(game._isFirstRowComplete()).toEqual(undefined);
      });
    });

    describe ("Second row", function() {
      it("returns true if all are X", function() {
        game.board.fields[3] = "X";
        game.board.fields[4] = "X";
        game.board.fields[5] = "X";
        expect(game._isSecondRowComplete()).toEqual("X");
      });
    });

    describe ("Third row", function() {
      it("returns true if all are X", function() {
        game.board.fields[6] = "X";
        game.board.fields[7] = "X";
        game.board.fields[8] = "X";
        expect(game._isThirdRowComplete()).toEqual("X");
      });
    });

    describe ("First column", function() {
      it("returns true if all are X", function() {
        game.board.fields[0] = "X";
        game.board.fields[3] = "X";
        game.board.fields[6] = "X";
        expect(game._isFirstColumnComplete()).toEqual("X");
      });
    });

    describe ("Second column", function() {
      it("returns true if all are X", function() {
        game.board.fields[1] = "X";
        game.board.fields[4] = "X";
        game.board.fields[7] = "X";
        expect(game._isSecondColumnComplete()).toEqual("X");
      });
    });

    describe ("Third column", function() {
      it("returns true if all are X", function() {
        game.board.fields[2] = "X";
        game.board.fields[5] = "X";
        game.board.fields[8] = "X";
        expect(game._isThirdColumnComplete()).toEqual("X");
      });
    });

    describe ("Diagonals", function() {
      it("returns true if all from top left to bottom right are X", function() {
        game.board.fields[0] = "X";
        game.board.fields[4] = "X";
        game.board.fields[8] = "X";
        expect(game._isDiagonalLeftToRightComplete()).toEqual("X");
      });

      it("returns true if all from top right to bottom left are X", function() {
        game.board.fields[2] = "X";
        game.board.fields[4] = "X";
        game.board.fields[6] = "X";
        expect(game._isDiagonalRightToLeftComplete()).toEqual("X");
      });
    });

    describe("Run all checks", function() {
      it("checks if any of the winning possibilites are true", function() {
        game.board.fields[2] = "X";
        game.board.fields[4] = "X";
        game.board.fields[6] = "X";
        expect(game.runChecks()).toEqual("X");
      });
    });

  });

});
