describe("Player One", function() {

  var playerOne;

  beforeEach(function() {
    playerOne = new PlayerOne();
  });

  it("initializes with null as the type", function() {
    expect(playerOne.type).toEqual(null)
  });

  it("user can choose to be either the nought or the cross", function() {
    playerOne.pickType("O");
    expect(playerOne.type).toEqual("O");
  });

});
