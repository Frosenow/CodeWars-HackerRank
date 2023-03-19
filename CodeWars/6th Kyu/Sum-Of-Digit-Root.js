function digitalRoot(n) {
    if(n < 10) return n; 
  
    let numsArr = []; 
    while(n >= 1){
      if(n < 10)
      {
        numsArr.push(n)
        n = numsArr.reduce((a, c) => a + c)
        numsArr = []; 
      }
      numsArr.push(n % 10)
      n = Math.floor(n / 10);
    }
    return numsArr[numsArr.length - 1]
}
