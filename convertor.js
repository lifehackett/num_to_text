var maps    = require('./maps.js');
var HUNDRED = 'hundred';
var SPACE   = ' ';


var convertor = {
  powersOfTenSuffix: function (nth) {
    return maps.powersOfTen[nth];
  },

  digitGroupToText: function (num) {
    var lessThan100Num = num % 100;
    var numText        = '';
    var hasTens        = false;

    if (num >= 100) {
      numText += this._hundredsToText(num);
    }

    if (this._isTeen(lessThan100Num)) {
      numText += this._teenToText(lessThan100Num);
    } else {
      if (lessThan100Num > 9) {
        numText += this._tensToText(lessThan100Num);
        hasTens = true;
      }

      if (hasTens && lessThan100Num % 10 !== 0) {
        numText += '-';
      }

      numText += this._digitToText(lessThan100Num % 10);
    }

    return numText;
  },

  // num: 3 digit integer
  _hundredsToText: function (num) {
    var index = Math.floor(num / 100);
    return maps.digits[index] + SPACE + HUNDRED + SPACE;
  },

  // num: 2 digit integer
  _teenToText: function (num) {
    var index = num % 10;
    return maps.teens[index];
  },

  // num: 2 digit integer
  _tensToText: function (num) {
    var index = Math.floor(num / 10);
    return maps.tens[index];
  },

  // num: 1 digit integer
  _digitToText: function (num) {
    return maps.digits[num];
  },

  _isTeen: function (num) {
    return num > 10 && num < 20;
  }
};

module.exports = convertor;