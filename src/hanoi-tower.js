const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
  let n = {};
  n.turns = Math.pow(2, disksNumber) - 1;
  n.seconds = n.turns / (turnsSpeed / 3600);
  return n;
};
