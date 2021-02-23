const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catArray = [];
  for(let i = 0; i < matrix.length; i += 1) {
    const res = matrix[i].filter(function(elem) {
      return elem === "^^";
    });
    catArray = catArray.concat(res);
  }
  return catArray.length;
};