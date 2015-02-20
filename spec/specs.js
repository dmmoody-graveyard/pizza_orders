describe('Pizza', function() {
  describe('slices()', function() {
    it('takes 12 and returns 8', function() {
      var newPizza = Object.create(Pizza);
      expect(newPizza.slices(12)).to.equal(8);
    });

    it('takes 10 and returns 6', function() {
        var newPizza = Object.create(Pizza);
        expect(newPizza.slices(10)).to.equal(6);
    });
  });
});