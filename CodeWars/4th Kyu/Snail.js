snail = function(array) {
  if(array.length == 1) return array.flat(1) 
  
  const numContainer = []; 
  for(let i = 0; i < Math.ceil(array.length/2); i++){
    moveRight(array, numContainer, i)
    moveDown(array, numContainer, i)
    moveLeft(array, numContainer, i)
    moveUp(array, numContainer, i)
    if(numContainer.length >= array.length ** 2 ) return numContainer
  }
}

function moveRight(array, numContainer, iteration){
  for(let i = 0 + iteration; i < array.length - iteration; i++){
    numContainer.push(array[iteration][i])
  }
}

function moveDown(array, numContainer, iteration){
  for(let i = 1 + iteration; i < array.length - iteration; i++){
    numContainer.push(array[i][array.length - iteration - 1])
  }
}

function moveLeft(array, numContainer, iteration){
  for(let i = array.length - 2 - iteration; i >= iteration; i--){
    numContainer.push(array[array.length - iteration - 1][i])
  }
}

function moveUp(array, numContainer, iteration){
  for(let i = array.length - 2 - iteration; i >= iteration + 1; i--){
    numContainer.push(array[i][iteration])
  }
}
