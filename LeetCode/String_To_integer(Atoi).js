/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    
    if(s.length === 0){
        return 0; 
    }
    
    let sign = 1; 
    let numBuffer = 0;
    let base = 10; 
    let pointer = 0; 

    if(s[pointer] === '-' || s[pointer] === '+'){
        sign = s[pointer] === '-' ? -1 : 1; 
        pointer++; 
    }

    while(pointer < s.length){
       let digit = s.charCodeAt(pointer) - '0'.charCodeAt(0)
        if(digit < 0 || digit > 9){
            break; 
        }
        numBuffer = numBuffer * base + digit; 
        pointer++;
    }
  
    if(numBuffer > Math.pow(2, 31) - 1 || numBuffer < Math.pow(2, 31) * (-1)){
        return  sign === 1 ? Math.pow(2, 31) - 1 : Math.pow(2, 31) * sign; 
    } 

    return numBuffer * sign; 
};
