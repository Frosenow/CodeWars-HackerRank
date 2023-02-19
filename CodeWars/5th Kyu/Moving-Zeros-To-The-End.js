function moveZeros(arr) {
  let filtred = arr.filter(element => element !== 0)
  
  for(let i = filtred.length; i <= arr.length - 1; i++){
    filtred[i] = 0; 
  }
  return filtred; 
}
