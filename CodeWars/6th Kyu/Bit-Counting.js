var countBits = function(n) {
  const bin = n.toString(2)
  let ones = 0; 
  
  bin.split('').forEach(bit => bit == '1' ? ones++ : null)
  
  return ones; 
};
