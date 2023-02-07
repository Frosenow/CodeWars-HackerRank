function dirReduc(arr){
   const reductor = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  }
  
  let stack = []; 
  
  arr.forEach(elem => {
    if(stack[stack.length - 1] == reductor[elem])
      stack.pop()
    else 
      stack.push(elem)
  })
  
  return stack; 
}
