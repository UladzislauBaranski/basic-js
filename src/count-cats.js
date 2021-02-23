const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  count = 0;
  for (let elem of matrix) {
      for (let el of elem) {
          if (el === '^^') {
              count++;
          }
      }
  }
  return count;
};
