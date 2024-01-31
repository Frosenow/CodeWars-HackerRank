/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set(); 
    let longestSubstring = 0;
    let left = 0; 
    let right = 0; 

    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right)); 
            right++; 
            longestSubstring = Math.max(longestSubstring, set.size) 
        } else {
            set.delete(s.charAt(left))
            left++; 
        }
    }

    return longestSubstring; 

};
