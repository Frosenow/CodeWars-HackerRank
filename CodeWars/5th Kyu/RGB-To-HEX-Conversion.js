function rgb(r, g, b){
  const hexValue = []; 
  for(let arg of arguments){
    if(arg > 255) arg = 255; 
    if(arg < 0) arg = 0; 
    
    let hexString = arg.toString(16).toUpperCase()
    if(hexString.length == 1){
      hexString = '0' + hexString; 
    }
    hexValue.push(hexString)
  }
  return hexValue.join('')
}
