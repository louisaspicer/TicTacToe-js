describe("Player Two", function() {

   var playerTwo;

   beforeEach(function() {
     playerTwo = new PlayerTwo();
   });

   describe("Initializing", function() {
     expect(playerTwo.type).toBeNull();
   });

});
