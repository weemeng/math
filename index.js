const math = {
  add: (...numbers) => {
    return numbers.reduce((sum, val) => sum + val, 0);
  },
  randfloor: maxval => {
    return Math.floor(Math.random() * maxval);
  },
  subtract: function(initVal, ...numbers) {
    return initVal - this.add(...numbers);
  },
  multiply: (...numbers) => {
    return numbers.reduce((sum, val) => sum * val, 0);
  }
};
module.exports = math;
