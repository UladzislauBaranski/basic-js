const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }
  let result = [];
  members.forEach(function (element) {
    if(typeof element === "string") {
      const letter = element.trim().charAt(0).toUpperCase();
      result.push(letter);
    }
  });
   return result.sort().join('');
};