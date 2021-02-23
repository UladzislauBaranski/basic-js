const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if("string" != typeof(sampleActivity) || isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  let res = Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / 0.693);
  return (res > 0 && res !== Infinity)
      ? res
      : false;
};
