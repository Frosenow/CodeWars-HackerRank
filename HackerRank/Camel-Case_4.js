function processData(input) {
    let list = input.split(/\r?\n/).map(line =>  {
        const [operation, type, words] = line.split(';')
        if(operation === 'C'){
            if(type === 'V'){
            return combineCamelCase(words, type)  
            } else if(type === 'C') {
                return combineCamelCase(words, type)
            } else if(type === 'M') {
                return combineCamelCase(words, type) + '()' 
            } 
        } else {
            if(type === 'M'){
               return splitCamelCase(String(words.slice(0, words.length -2)))  
            } else {
                return splitCamelCase(String(words))
            }
               
        }  
    });
    console.log(list.join('\n'))
} 

function combineCamelCase(words, type){
    return words.split(' ').map((word, idx) => {
        if(idx == 0){
            if(type === 'C'){
               return word[0].toUpperCase() + word.slice(1, word.length) 
            } else {
              return word.toLowerCase()  
            }
            
        } else {
            return word[0].toUpperCase() + word.slice(1, word.length)
        }
    }).join('')
}

function splitCamelCase(words){
    return [...words].map((char, idx) => {
        if(char === char.toUpperCase()){
            if(idx === 0){
                return char.toLowerCase(); 
            } else {
                return ' ' + char.toLowerCase();
            }
            
        } else {
            return char
        }
    }).join('')
}



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
