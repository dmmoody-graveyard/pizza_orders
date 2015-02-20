var Pizza = {
  slices: function(size) {
    if (this.topping === "Cheese") {
      if (size === 12) {
        return 8;
      } else if (size === 10) {
        return 6;
      } else {
        return 10;
      }
    } else {
      if (size === 12) {
        return 6;
      } else if (size === 10) {
        return 4;
      } else {
        return 8;
      }
    }
  }
};

$(document).ready(function() {
  $('form#order').submit(function(event) {
    event.preventDefault();

    var inputtedTopping = $('select#topping').val();
    var inputtedSize = parseInt($('select#size').val());

    var newOrder = Object.create(Pizza);

    newOrder.topping = inputtedTopping;
    var slices = newOrder.slices(inputtedSize);

    $('#order-result').show()
    $('#pizza-size').text(inputtedSize);
    $('#pizza-topping').text(newOrder.topping);
    $('#pizza-slices').text(slices);
  });
});