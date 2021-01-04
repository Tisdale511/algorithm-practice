var findMedianSortedArrays = function(nums1, nums2) {
    
    const joined = nums1.concat(nums2)
    const mid = Math.floor(joined.length/2)
    let nums = joined.sort((a, b) => a - b)
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid])/2;
    
};