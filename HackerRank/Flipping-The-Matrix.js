/*
* Complete the 'flippingMatrix' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY matrix as parameter.
*/
function flippingMatrix(matrix) {
   let n = matrix.length / 2
   let max = 0;
   let total = 0;

   for(let row = 0; row < n; row++){
     for(let col = 0; col < n; col++){
     max = Number.MIN_VALUE
     max = Math.max(matrix[row][col], max)
     max = Math.max(matrix[row][2 * n - col - 1], max)
     max = Math.max(matrix[2 * n - row - 1][col], max)
     max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max)
     total += max
    }
   }
    return total;
}
