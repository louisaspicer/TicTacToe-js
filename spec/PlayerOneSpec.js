describe("Player One", function() {

  var playerOne;

  beforeEach(function() {
    playerOne = new PlayerOne();
  });

  describe("Initializing", function() {

    it("type starts as null", function() {
      expect(playerOne.type).toBeNull();
    });

    it("turn is true", function() {
      expect(playerOne.turn).toBeTruthy();
    });

  });

  describe("user playing", function() {

    it("can choose to be either the nought or the cross", function() {
      playerOne.pickType("O");
      expect(playerOne.type).toEqual("O");
    });

    it("can update the board object", function() {
      var board = {fields: [null, null, null]};
      playerOne.pickType("O");
      playerOne.playTurn(1, board);
      expect(board.fields[1]).not.toBeNull();
    });


  });

});
