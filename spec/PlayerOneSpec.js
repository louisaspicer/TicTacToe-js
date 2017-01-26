describe("Player One", function() {

  var playerOne;

  beforeEach(function() {
    playerOne = new PlayerOne();
  });

  describe("Initializing", function() {

    it("type starts as null", function() {
      expect(playerOne.type).toEqual(null);
    });

    it("turn is true", function() {
      expect(playerOne.turn).toEqual(true);
    });

  });

  it("user can choose to be either the nought or the cross", function() {
    playerOne.pickType("O");
    expect(playerOne.type).toEqual("O");
  });

});
