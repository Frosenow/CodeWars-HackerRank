function titleCase(title, minorWords) {
  if(!title.length) return '';
  
  return title.split(' ').map((word, index) => {
    
    if(minorWords === undefined || index == 0){
      return firstUpperCase(word)
    } else if(minorWords.toLowerCase().split(' ').includes(word.toLowerCase())){
      console.log(word, 'MINORWORDS:', minorWords)
      return word.toLowerCase();
    }else{ 
      return firstUpperCase(word);
    } 
  }).join(' ')
  
}

function firstUpperCase(word){
  return word[0].toUpperCase() + word.slice(1, word.length + 1).toLowerCase()
}
