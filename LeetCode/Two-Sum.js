/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // USING SORTED LIST 
var twoSum = function(nums, target) {
    const numsCopy = [...nums];
    nums.sort((a, b) => a - b)

    let start = 0; 
    let end = nums.length - 1; 

    while(start < end){
        if((nums[start] + nums[end]) === target){
            return [numsCopy.indexOf(nums[start]), numsCopy.lastIndexOf(nums[end])]
        } else if(nums[start] + nums[end] > target){
            end--; 
        } else {
            start++; 
        }
    }
};

// USING HASHMAP
var twoSum = function(nums, target) {
    const pairs = new Map(); 

    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i]; 
        if(pairs.has(diff)){
           return [pairs.get(diff), i]
        }
        pairs.set(nums[i], i)

    }
};
