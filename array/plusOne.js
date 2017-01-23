function plusOne(A) {
  function addOne(arr) {
    place = arr.length - 1;
    var hasCarry = true;
    while(hasCarry) {
      if(arr[place] < 9) {
        arr[place]++;
        break;
      }
      if(place === -1) {
        arr.unshift(1);
        break;
      }
      arr[place] = 0;
      place = place - 1;

    }
  }

  function removeLeadingZeroes(arr) {
    var hasLeadingZeroes = arr[0] === 0;
    var index = 0;
    while(hasLeadingZeroes) {
      arr.shift();
      hasLeadingZeroes = arr[0] === 0;
    }
  }

  addOne(A);
  removeLeadingZeroes(A);
  return A;
}

var x = plusOne([9,9,]);
console.log(x);
