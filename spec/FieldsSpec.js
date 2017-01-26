describe("Fields", function() {

  var fields;

  beforeEach(function() {
    fields = new Fields();
  });

  it("initializes with a top left field set to null", function() {
    expect(fields.topLeft).toEqual(null);
  });

  it("initializes with a middle middle field set to null", function() {
    expect(fields.topLeft).toEqual(null);
  });
});
