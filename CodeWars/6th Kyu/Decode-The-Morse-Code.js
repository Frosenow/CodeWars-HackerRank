decodeMorse = function(morseCode){
  let words = morseCode.split('   ')
  
  return words.map(word => {
    return word.split(' ').map(char => MORSE_CODE[char])
    .join('')
  })
  .join(' ')
  .trim()
}
