function firstNonRepeatingLetter(s) {
  const charMap = new Map()
  s.toLowerCase().split('').forEach(char => {
    if(!charMap.has(char)){
      charMap.set(char, 0)
    }
    charMap.set(char, charMap.get(char) + 1)
  })
  
  console.log(s, charMap)
  for(const [key, value] of charMap){
    if(value == 1){
      return s.indexOf(key) == -1 ? key.toUpperCase() : key; 
    }
  }
  return '';
}
