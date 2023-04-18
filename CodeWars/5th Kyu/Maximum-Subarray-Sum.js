var maxSequence = function(arr){
  let maxSum = 0; 
  for(let i = 1; i <= arr.length; i++){
    for(let j = 0; j + i <= arr.length; j++){
      let tempSum = arr.slice(j, j + i).reduce((total, elem) => total + elem)
      if(tempSum > maxSum)
        maxSum = tempSum; 
    }
  }
  return maxSum;
  
}
