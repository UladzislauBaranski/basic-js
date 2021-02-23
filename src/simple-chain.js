const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return(this.arr.length);
  },
  addLink(value) {
    value = '( ' + value + ' )';
    this.arr.push(value)
    return this;
  },
  removeLink(position) {
    if (typeof position != "number" || position < 1 || position > this.arr.length - 1){
      this.arr = [];
      throw Error;
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let a = [...this.arr];
    this.arr = [];
    return a.join("~~");
  }
};

module.exports = chainMaker;
