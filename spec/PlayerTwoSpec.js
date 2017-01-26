describe("Player Two", function() {

  var playerTwo;

  beforeEach(function() {
    playerTwo = new PlayerTwo();
  });

  describe("Initializing", function() {
    it("has it's type set to null", function() {
      expect(playerTwo.type).toBeNull();
    });
  });

  describe("user playing", function() {

    var board;

    beforeEach(function() {
      playerTwo.pickType("X");
      board = {fields: [null, null, null]};
    });

    it("can set the players type", function() {
      expect(playerTwo.type).toEqual("X");
    });

    it("can update the board object", function() {
      playerTwo.playTurn(1, board);
      expect(board.fields[1]).not.toBeNull();
    });

  });

});
