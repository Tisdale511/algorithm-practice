// var findMedianSortedArrays = function(nums1, nums2) {
    
//     const joined = nums1.concat(nums2)
//     const mid = Math.floor(joined.length/2)
//     let nums = joined.sort((a, b) => a - b)
//     return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid])/2;
    
// }; 


var findMedianSortedArrays = function(nums1, nums2) {
    const totalEle = nums1.length + nums2.length;
    const target = Math.floor(totalEle / 2) + 1;
    const doWeTakeTwo = totalEle % 2 === 0
    let p1 = p2 = 0;
    let currEle, prevEle;
    let count = 0;
    while (true) {
        count++;
        prevEle = currEle;
        const val1 = nums1[p1], val2 = nums2[p2];
        if (val1 === undefined || val1 > val2) {
            currEle = val2;
            p2++;
        } else {
            currEle = val1;
            p1++;
        }
        if (count === target) return doWeTakeTwo ? (prevEle + currEle) / 2 : currEle
    }
};

console.log(findMedianSortedArrays([2], [3]))