/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s; 
    let res = ''; 
    let incrementBy = (numRows - 1) * 2; 

    for(let row = 0; row < numRows; row++){
        for(let i = row; i < s.length; i += incrementBy){
            res += s[i] 
            if(row > 0 && row < (numRows - 1) && ((i + incrementBy) - 2 * row) < s.length){
                res += s[i + incrementBy - 2 * row]
            }
        }
    }
    return res;
};
