function comp(array1, array2){
  if(!array1 || !array2)
    return false; 
  
  let elemSize = 0;
  array1.forEach((element, idx) => {
    if(array2.includes(element ** 2)){
            elemSize++;
            array2.splice(array2.indexOf(element ** 2), 1)
    }

  })
  return elemSize === array1.length 
}
