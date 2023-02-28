//return the total number of smiling faces in the array
function countSmileys(arr) {
  const faces = [':D', ':)', ';)', ';D']
  let sum = 0;
  
  arr.forEach(face => {
    if(faces.includes(face)) {
      sum++; 
    } else if(face.length === 3){
      if((face[1] === '-' || face[1] === '~') && faces.includes(face[0] + face[2])) sum++; 
    }
  })
  return sum; 
}
