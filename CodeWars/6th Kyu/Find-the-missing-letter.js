function findMissingLetter(array){
  let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  
  const index = alphabet.indexOf(array[0].toLowerCase())
  const word = array.join('')
  for(let i = index, j = 0; i < array.length + index; i++, j++){
    if(array[j].toLowerCase() !== alphabet[i])
      return word.match(/[A-Z]/) ? alphabet[i].toUpperCase() : alphabet[i]
  }
}
