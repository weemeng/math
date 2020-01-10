const math = {
  add: (...numbers) => {
    return numbers.reduce((sum, val) => sum + val, 0);
  },
  randfloor: a => {
    return Math.floor(Math.random() * a);
  },
  subtract: function(initVal, ...numbers) {
    return initVal - this.add(...numbers);
    // return initVal - this.add(numbers)
  }
};
module.exports = math;
