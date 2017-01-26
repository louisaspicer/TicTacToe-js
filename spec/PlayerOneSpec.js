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

    var board;

    beforeEach(function() {
      playerOne.pickType("O");
      board = {fields: [null, null, null]};
    });

    it("can choose to be either the nought or the cross", function() {
      expect(playerOne.type).toEqual("O");
    });

    it("can update the board object", function() {
      playerOne.playTurn(1, board);
      expect(board.fields[1]).not.toBeNull();
    });

    it("once player has played, turn is set to false", function() {
      playerOne.playTurn(1, board);
      expect(playerOne.turn).not.toBeTruthy();
    });


  });

});
