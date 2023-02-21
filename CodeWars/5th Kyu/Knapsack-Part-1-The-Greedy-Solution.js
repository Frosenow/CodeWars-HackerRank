var knapsack=function(capacity,items){
  const quantities = new Array(items.length).fill(0)
 
  const valueRatio = items.map((arr, idx) => [arr[1]/arr[0], arr[0], idx]).sort((a, b) => b[0] - a[0])
  
  let i = 0;
  while(i < items.length){
    while(capacity >= valueRatio[i][1]){
      quantities[valueRatio[i][2]]++;
      capacity -= valueRatio[i][1]  
    }
    i++; 
  }
  
  return quantities; 
}

