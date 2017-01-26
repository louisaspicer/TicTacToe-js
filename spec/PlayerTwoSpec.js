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
    it("can set the players type", function() {
      playerTwo.pickType("X");
      expect(playerTwo.type).toEqual("X");
    });
  });

});
