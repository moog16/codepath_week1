
function romanToNum(romanStr) {
  var roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var sum = 0;
  var i = 0;
  while(i < romanStr.length) {
    var currentInt = roman[romanStr[i]];
    var nextInt = roman[romanStr[i+1]];

    if(currentInt < nextInt && nextInt) {
      sum += (nextInt - currentInt);
      i+=2;
    } else {
      sum += currentInt;
      i++;
    }
  }

  return sum;
}

console.log(romanToNum('CMIX'));
