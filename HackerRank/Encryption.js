function encryption(s) {
    const wordsArr = s.split('').map(word => word.trim());
    let row = Math.floor(Math.sqrt(wordsArr.length))
    let column = Math.ceil(Math.sqrt(wordsArr.length))
    
    if(row * column < wordsArr.length){
       while(row * column < wordsArr.length){
           Math.min(row, column) == row ? row += 1 : column += 1;  
       } 
    }
    
    const encrypted = [];
    for(let i = 0; i < row; i++){
        const temp = [];
        for(let j = 0; j < column; j++){
           temp.push(wordsArr[i*column + j]) 
        }
        encrypted.push(temp)
    }
    
    const rotated = encrypted[0].map((_, idx) => encrypted.map(row => row[idx]))
    return rotated.map(arr => arr.join('')).join(' ')
}
