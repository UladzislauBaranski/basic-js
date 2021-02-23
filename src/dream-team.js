const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof(members) != 'object' || members == null) {
    return false;
  }

  let str = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string'){
      str += members[i].trim().toUpperCase()[0];
    }
  }
  return str.split('').sort().join('');
};
