/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0; 
    let numRev = 0; 
    let num = Math.abs(x)
    while(num){
        numRev = numRev*10 + (num % 10)
        num = Math.floor(num / 10); 
    }    
    if (numRev < (Math.pow(2, 31)* (-1)) || numRev > Math.pow(2, 31) - 1){
        return 0
    } else {
        return sign ? -numRev : numRev; 
    }

};
