function isPangram(string){
  let words = 0; 
  let wordsArr = [];
  string.toLowerCase().split('').forEach((elem) => {
    if(!wordsArr.includes(elem) && elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122){
      words++; 
      wordsArr.push(elem)
    }
  })
  console.log(words)
  return words == 26 
}
