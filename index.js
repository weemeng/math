const math = {
  add: (...numbers) => {
    return numbers.reduce((sum, val) => sum + val,0);
  },
  randfloor: a => {
    return Math.floor(Math.random() * a);
  }
};
module.exports = math;
