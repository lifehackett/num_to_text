var input = process.argv[2];

input = cleanInput(input);

if (!isValidInput(input)) {
  console.log('Invalid input. Please enter a number between 1-999,999,999');
  process.exit();
}

var num;
var numStr;
var numText   = '';
var convertor = require('./convertor.js');
var SPACE     = ' ';

//Need to reverse string so regex matches from right to left
var numStrReversed         = input.split('').reverse().join('');
var numStrReversedSegments = numStrReversed.match(/.{1,3}/g);
var numReversedSegments    = [];

//Loop through each 3 digit segment
//Convert each individual segment to text
for (var i = 0; i < numStrReversedSegments.length; i++) {
  //Un-reverse the digits within the segment
  numStr = numStrReversedSegments[i].split('').reverse().join('');
  num = parseInt(numStr, 10);

  numReversedSegments.push(convertor.digitGroupToText(num));
}

//Loop through each segment, combining them into a single string and adding the appropriate power
// of ten string after each segment
for (var i = 0; i < numReversedSegments.length; i++) {
  numText = numReversedSegments[i] + SPACE + convertor.powersOfTenSuffix(i) + SPACE + numText;
}

console.log(numText);



//PRIVATE HELPER FUNCTIONS

// input: number as string
function cleanInput (input) {
  return input ? input.replace(',', '') : input;
}

// input: number as string
function isValidInput (input) {
  var num;

  if (!input) {
    return false;
  }

  if (isNaN(input)) {
    return false;
  }

  //Currently not supporting decimals
  if (input.indexOf('.') > -1) {
    return false;
  } 

  num = parseInt(input);

  if (num < 1 || num > 999999999) {
    return false;
  }

  return true;
}