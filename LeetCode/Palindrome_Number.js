/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numToStr = String(x).split('');
    let left = 0; 
    let right = numToStr.length - 1; 
    let isPalindrom = true; 
  
    while(left < right){
        if(numToStr[left] !== numToStr[right]){
            isPalindrom = false; 
            break; 
        }
        left++; 
        right--; 
    }

    return isPalindrom
};
