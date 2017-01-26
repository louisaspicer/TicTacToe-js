describe("GameChecker", function() {

  var gameChecker;
  var board;

  beforeEach(function() {
    board = jasmine.createSpyObj("board", ["fields"]);
    gameChecker = new GameChecker(board);
  });

  it("initalizes a new board", function() {
    expect(gameChecker.board).toEqual(board);
  });

  describe("Checking the board", function() {

    describe("First row", function() {
      it("returns true if all are X", function() {
        gameChecker.board.fields[0] = "X";
        gameChecker.board.fields[1] = "X";
        gameChecker.board.fields[2] = "X";
        expect(gameChecker._isFirstRowComplete()).toEqual("X");
      });

      it("returns true if all are O", function() {
        gameChecker.board.fields[0] = "O";
        gameChecker.board.fields[1] = "O";
        gameChecker.board.fields[2] = "O";
        expect(gameChecker._isFirstRowComplete()).toEqual("O");
      });

      it("returns undefined if not all match", function() {
        gameChecker.board.fields[0] = "O";
        expect(gameChecker._isFirstRowComplete()).toEqual(undefined);
      });
    });

    describe ("Second row", function() {
      it("returns true if all are X", function() {
        gameChecker.board.fields[3] = "X";
        gameChecker.board.fields[4] = "X";
        gameChecker.board.fields[5] = "X";
        expect(gameChecker._isSecondRowComplete()).toEqual("X");
      });
    });

    describe ("Third row", function() {
      it("returns true if all are X", function() {
        gameChecker.board.fields[6] = "X";
        gameChecker.board.fields[7] = "X";
        gameChecker.board.fields[8] = "X";
        expect(gameChecker._isThirdRowComplete()).toEqual("X");
      });
    });

    describe ("First column", function() {
      it("returns true if all are X", function() {
        gameChecker.board.fields[0] = "X";
        gameChecker.board.fields[3] = "X";
        gameChecker.board.fields[6] = "X";
        expect(gameChecker._isFirstColumnComplete()).toEqual("X");
      });
    });

    describe ("Second column", function() {
      it("returns true if all are X", function() {
        gameChecker.board.fields[1] = "X";
        gameChecker.board.fields[4] = "X";
        gameChecker.board.fields[7] = "X";
        expect(gameChecker._isSecondColumnComplete()).toEqual("X");
      });
    });

    describe ("Third column", function() {
      it("returns true if all are X", function() {
        gameChecker.board.fields[2] = "X";
        gameChecker.board.fields[5] = "X";
        gameChecker.board.fields[8] = "X";
        expect(gameChecker._isThirdColumnComplete()).toEqual("X");
      });
    });

    describe ("Diagonals", function() {
      it("returns true if all from top left to bottom right are X", function() {
        gameChecker.board.fields[0] = "X";
        gameChecker.board.fields[4] = "X";
        gameChecker.board.fields[8] = "X";
        expect(gameChecker._isDiagonalLeftToRightComplete()).toEqual("X");
      });

      it("returns true if all from top right to bottom left are X", function() {
        gameChecker.board.fields[2] = "X";
        gameChecker.board.fields[4] = "X";
        gameChecker.board.fields[6] = "X";
        expect(gameChecker._isDiagonalRightToLeftComplete()).toEqual("X");
      });
    });

    describe("Run all checks", function() {
      it("checks if any of the winning possibilites are true", function() {
        gameChecker.board.fields[2] = "X";
        gameChecker.board.fields[4] = "X";
        gameChecker.board.fields[6] = "X";
        expect(gameChecker.runChecks()).toEqual("X");
      });
    });

  });

});
