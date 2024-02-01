/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length; 

    // Ensure nums1 is the smaller array
    if (nums2.length < nums1.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let left = 0; 
    let right = nums1.length; 
    let m = nums1.length; 
    let n = nums2.length; 

    while (left <= right) {
        let i = Math.floor((left + right) / 2);
        let j = Math.floor((m + n + 1) / 2) - i; 

        let nums1Left = i === 0 ?  Number.NEGATIVE_INFINITY : nums1[i - 1]; 
        let nums1Right = i === m ? Number.POSITIVE_INFINITY : nums1[i]; 
        let nums2Left = j === 0 ? Number.NEGATIVE_INFINITY : nums2[j - 1]
        let nums2Right = j === n ? Number.POSITIVE_INFINITY : nums2[j]; 

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            if (totalLength % 2 === 0) {
                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
            } else {
                return Math.max(nums1Left, nums2Left);
            }
        } else if (nums1Left > nums2Right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};
