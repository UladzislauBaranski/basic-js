const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse
}
encrypt(message, key) {
    key = key.toLowerCase();
    let msg = message.replace(/[#@\/|*! :()^?%=+-<>,.1234567890]/g, '').toLowerCase();
    let code_message = msg.split('').map(el => el.charCodeAt(0) - 97);
    let code_key = msg.split('').map((el, i) => i < key.length
        ? el = key[i].charCodeAt(0) - 97
        : el = key[i % key.length].charCodeAt(0) - 97);
    let encription = code_message.map((el, i) => el + code_key[i] < 26
        ? el = String.fromCharCode(el + code_key[i] + 97)
        : el = String.fromCharCode(((el + code_key[i]) % 26) + 97)).join('');
    for (let i = 0; i < message.length; i++) {
        if ('#@\\/|*! :()^?%=+-<>,.1234567890'.includes(message[i])) {
            encription = encription.slice(0, i) + message[i] + encription.slice(i,)
        }
    }
    encription = encription.toUpperCase();

    return this.reverse ?  encription.split('').reverse().join('') : encription;
}

decrypt(message, key) {
    key = key.toLowerCase();
    let msg = message.replace(/[#@\/|*! :()^?%=+-<>,.1234567890]/g, '');
    let code_message = msg.toLowerCase().split('').map(el => el.charCodeAt(0) - 97);
    let code_key = msg.split('').map((el, i) => i < key.length
        ? el = key[i].charCodeAt(0) - 97
        : el = key[i % key.length].charCodeAt(0) - 97);
    let decryption = code_message.map((el, i) => el >= code_key[i]
        ? String.fromCharCode((el - code_key[i]) + 97)
        : String.fromCharCode((el + 26 - code_key[i]) + 97)).join('');
    for (let i = 0; i < message.length; i++) {
        if ('#@\\/|*! :()^?%=+-<>,.1234567890'.includes(message[i])) {
            decryption = decryption.slice(0, i) + message[i] + decryption.slice(i,)
        }
    }
    decryption = decryption.toUpperCase();

    return this.reverse ? decryption.split('').reverse().join('') : decryption;
}
}

module.exports = VigenereCipheringMachine;
