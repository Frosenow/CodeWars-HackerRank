function isValidIP(str) {
  let ipArr = str.split('.')
  if(ipArr.length !== 4) return false; 
  
  console.log(ipArr)
  for(const value of ipArr){
    if(String(Number(value)) !== value) return false;  
    let valueToNumber = parseInt(value)
    if(valueToNumber < 0 || valueToNumber > 255) return false;
  }
  return true;
}
