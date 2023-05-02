function pigIt(str){
  return str.split(' ').map(word => {
    if(word.match(/[A-Za-z]/)){
      let wordArr = word.split('');
      const first = wordArr.shift(); 
      const result = word.slice(1)+first+'ay'
      return result
    } else {
      return word 
    }

  }).join(' ')
}
