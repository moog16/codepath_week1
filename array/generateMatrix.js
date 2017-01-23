function generateMatrix(A) {
  var size = A*A;
  var flatMatrix = [];
  var matrix = [];
  var direction = 'r';
  for(var i=0; i<size; i++) {
    flatMatrix[i] = i+1;
  }

  var index = 0;
  var row = 0;
  var col = 0;
  var leftBounds = 0;
  var rightBounds = A-1;
  var upperBounds = 0;
  var lowerBounds = A-1;

  while(index < size) {
    if(!matrix[row]) {
      matrix[row] = [];
    }
    matrix[row][col] = flatMatrix[index];

    switch(direction) {
      case 'r': {
        col++;
        if(col > rightBounds) {
          col = rightBounds;
          direction = 'd';
          row = row+1;
          upperBounds = row;
        }
        break;
      }
      case 'd': {
        row++;
        if(row > lowerBounds) {
          row = lowerBounds;
          direction = 'l';
          col = col-1;
          rightBounds = col;
        }
        break;
      }
      case 'l': {
        col--;
        if(col < leftBounds) {
          col = leftBounds;
          direction = 'u';
          row = row - 1;
          lowerBounds = row;
        }
        break;
      }
      case 'u': {
        row--;
        if(row < upperBounds) {
          row = upperBounds;
          direction = 'r';
          col = col+1;
          leftBounds = col;
        }
      }
    }
    index++;
  }
  return matrix;
}

var x = generateMatrix(7);
console.log(x)


// [1, 2, 3, 4]             [[0,0], [0,1], [0,2], [0,3]]
// [12, 13, 14, 5]          [[1,0],[1,1],[1,2],[1,3]]
// [11, 16, 15, 6]          [[2,0],[2,1],[2,2],[2,3]]
// [10, 9, 8, 7]            [[3,0],[3,1],[3,2],[3,3]]
