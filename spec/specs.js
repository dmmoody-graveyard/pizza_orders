describe('Pizza', function() {
  describe('topping', function() {
    it('takes "Cheese" as a topping and returns "Cheese"', function() {
      var newPizza = Object.create(Pizza);
      newPizza.topping = 'Cheese';
      expect(newPizza.topping).to.equal('Cheese');
    });

    it('takes "Pepperoni" as a topping and returns "Pepperoni"', function() {
      var newPizza = Object.create(Pizza);
      newPizza.topping = "Pepperoni";
      expect(newPizza.topping).to.equal('Pepperoni');
    });
  });

  describe('slices()', function() {
    it('takes 12 for a Cheese pizza and returns 8', function() {
      var newPizza = Object.create(Pizza);
      newPizza.topping = 'Cheese';
      expect(newPizza.slices(12)).to.equal(8);
    });

    it('takes 10 for a Cheese pizza and returns 6', function() {
      var newPizza = Object.create(Pizza);
      newPizza.topping = 'Cheese';
      expect(newPizza.slices(10)).to.equal(6);
    });

    it('takes 14 for a Cheese pizza and returns 10', function() {
      var newPizza = Object.create(Pizza);
      newPizza.topping = 'Cheese';
      expect(newPizza.slices(14)).to.equal(10);
    });

    it('takes 12 for a Pepperoni pizza and returns 6', function() {
      var newPizza = Object.create(Pizza);
      newPizza.topping = "Pepperoni";
      expect(newPizza.slices(12)).to.equal(6);
    });
  });
});