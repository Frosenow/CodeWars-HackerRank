function pascal(depth) {
  const pascalTriangle = [[1]]
  
  for(let i = 1; i < depth; i++){
    let row = []; 
    for(let j = 0; j < pascalTriangle.length - 1; j++){
      row.push(pascalTriangle[i - 1][j] + pascalTriangle[i - 1][j + 1])
    }
    row.push(1)
    row.unshift(1)
    pascalTriangle.push(row)
  }
  return pascalTriangle
}
