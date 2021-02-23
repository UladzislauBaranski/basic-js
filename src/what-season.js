const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date == "undefined") {
    return "Unable to determine the time of year!";
  }

  if (date.hasOwnProperty("getMonth")) {
    throw Error;
  }

  let mnth = date.getMonth();

  if (mnth == 11 || mnth == 0 || mnth == 1){
    return "winter";
  }
  if (mnth == 2 || mnth == 3 || mnth == 4){
    return "spring";
  }
  if (mnth == 5 || mnth == 6 || mnth == 7){
    return "summer";
  }
  if (mnth == 8 || mnth == 9 || mnth == 10){
    return "autumn";
  }
};
