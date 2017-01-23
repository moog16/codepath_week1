function repeatedNumber(A) {
  var hasFoundRepeat = false;
  var index = 0;
  var seenNums = {};
  while(!hasFoundRepeat && index < A.length) {
    var currentNum = A[index];
    index++;
    if(seenNums[currentNum]) {
      return currentNum;
    }
    seenNums[currentNum] = true;
  }
  return -1;
}

var x=repeatedNumber([3, 1, 3, 2]);
console.log(x)
