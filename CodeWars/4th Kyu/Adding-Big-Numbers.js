function add(a, b) {
  let offset = 0; 
  const maxLength = Math.max(a.length, b.length); 
  let outputSum = '';
  
  for(let i = 0; i < maxLength; i++){
    const digitA = parseInt(a[a.length - 1 - i] || 0, 10);
    const digitB = parseInt(b[b.length - 1 - i] || 0, 10); 
    const sum = digitA + digitB + offset;
    offset = Math.floor(sum / 10); 
    outputSum = (sum % 10) + outputSum; 
  }
  
  if(offset) outputSum = offset + outputSum; 
  
  return outputSum; 
}
