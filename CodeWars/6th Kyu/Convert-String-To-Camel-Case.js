function toCamelCase(str){
  if(str.length){
      let words = str.replaceAll(/-|_/g, ' ').split(' ')
      
      return words.map((word, idx) =>{
        if(idx !== 0) return word[0].toUpperCase() + word.slice(1)
                      return word
      }).join('')
  }
  return str
}
