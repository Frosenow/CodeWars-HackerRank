function productFib(prod){
  let [a, b] = [1, 1]
  while(a*b < prod){
    [a, b] = [b, a +b]
  }
  return [a, b, a*b === prod]
}


// Outher solution using recursion

function productFib(prod){
  for(let i = 0; i <= Math.sqrt(prod); i++){
    let first = fibRecursion(i - 1);
    let second = fibRecursion(i); 
    let output =  first * second; 
    if(output >= prod)
      return [first, second, output === prod]
  }
  
}
function fibRecursion(n){
  if(n < 2) return n;
  return fibRecursion(n - 1) + fibRecursion(n - 2)
}
