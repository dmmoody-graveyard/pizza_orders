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
    }
  }
};
