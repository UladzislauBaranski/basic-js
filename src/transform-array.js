const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let otv = [], n = arr.length;

  for (let i = 0; i < n; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        otv.pop();
        break;
      case "--double-next":
        if (i < n - 1) {
          otv.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i > 0) {
          otv.push(arr[i - 1]);
        }
        break;
      default:
        otv.push(arr[i]);
        break;
    }
  }

  return otv;
};
