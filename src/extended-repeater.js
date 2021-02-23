const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let buf = "", add = [], res =[];

  if (options.separator === undefined) {
      options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
      options.additionSeparator = "|";
  }

  if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  }

  if (options.addition === undefined) {
      options.addition = "";
  }
  
  buf = String(str);

  for (let j = 0; j < options.additionRepeatTimes; j++){
      add.push(String(options.addition));
  }

  buf += add.join(`${options.additionSeparator}`);
  console.log(buf)
  for (let i = 0; i < options.repeatTimes; i++){
      res.push(buf);
  }

  return res.join(`${options.separator}`);
};
  