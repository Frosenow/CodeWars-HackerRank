multiplicationTable = function(size) {
  const row = Array.from({length: size}, (_, i) => i + 1 )
  const table = []; 
  table.push(row)
  
  for(let i = 1; i < size; i++){
    const tempRow = [];
    const firstNewValue = table[i - 1][0] + 1
    for(let j = firstNewValue; j <= firstNewValue * size; j += firstNewValue){
      tempRow.push(j)
    }
    table.push(tempRow)
  }
  return table; 
}
