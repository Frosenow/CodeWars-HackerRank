function formingMagicSquare(s) {
  const magicSquares = generateMagicSquareMatrix([[8, 1, 6], [3, 5, 7], [4, 9, 2]])
  let minCost = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < magicSquares.length; i++) {
    let cost = 0;
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        cost += Math.abs(s[j][k] - magicSquares[i][j][k]);
      }
    }
    if (cost < minCost) {
      minCost = cost;
    }
  }
  return minCost;
}

function rotateMatrix(matrix){
    return matrix[0].map((_, idx) => matrix.map(row => row[idx]).reverse())
}

function generateMagicSquareMatrix(matrix) {
  let magicSquare = [];
  for (let i = 0; i < 4; i++) {
    matrix = rotateMatrix([...matrix]);
    magicSquare.push(matrix);
    let mirrored = matrix.map(arr => [...arr].reverse()); 
    magicSquare.push(mirrored);
  }
  return magicSquare
}
