function maxSubArray(A) {
  if(A.length === 1) {
    return A[0];
  }

  var largestSum = A[0];
  var arrLength = A.length;

  function findLargestSumFromIndex(arr, index) {
    var sum = 0;
    var largestCurrentSum = 0;

    while(sum >= largestCurrentSum && index < arrLength) {
      sum += arr[index];
      if(sum > largestCurrentSum) {
        largestCurrentSum = sum;
      } else if(sum < largestCurrentSum) {
        break;
      }
      index++;
    }
    return sum;
  }

  for(var i=0; i<A.length; i++) {
    var currentSum = 0;
    var largestSumFromIndex = findLargestSumFromIndex(A, i);
    if(largestSumFromIndex > largestSum) {
      largestSum = largestSumFromIndex;
    }
  }
  return largestSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
