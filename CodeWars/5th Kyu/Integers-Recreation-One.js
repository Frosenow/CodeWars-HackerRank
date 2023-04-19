function listSquared(m, n) {
    const nums = [];
    for(i = m; i <= n; i++){
      const squared = Math.sqrt(getDivisors(i).reduce((acc, elem) => acc + elem ** 2, 0))
      if(squared == Math.round(squared))
        nums.push([i, squared ** 2])
    }
  return nums; 
}

function getDivisors(num){
  let divisors = [];
  for(let i = 0; i <= num; i++){
    if(num % i == 0)
      divisors.push(i)
  }
  return divisors
}
