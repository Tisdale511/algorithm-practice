// var findMedianSortedArrays = function(nums1, nums2) {
    
//     const joined = nums1.concat(nums2)
//     const mid = Math.floor(joined.length/2)
//     let nums = joined.sort((a, b) => a - b)
//     return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid])/2;
    
// };

// var findMedianSortedArrays = function(nums1, nums2) {
    
//     let combinedArrayLength = nums1.length + nums2.length;
//     let halfArrLen;
//     let medianArray = [];

//     if(combinedArrayLength === 2){
//         return ((medianArray[0] + medianArray[1])/2)
//     }
//     if(nums1 === []){
//         nums1 === null
//     }
//     // console.log(nums1)
//     if(nums2 === []){
//         nums2 === null
//     }
//     if(combinedArrayLength % 2 !== 0){
//         halfArrLen = Math.floor(combinedArrayLength/2);
//     }else{
//         halfArrLen = (combinedArrayLength/2);
//     }

//     let i = 0, j = 0;

//     while(medianArray.length <= halfArrLen + 1){
//         if(nums1[i] <= nums2[j] || nums2[j] === undefined){
//             medianArray.push(nums1[i]);
//             i += 1
//             console.log(medianArray)
//         }else{
//             medianArray.push(nums2[j]);
//             j += 1
//         }

//         if(medianArray.length === halfArrLen + 1 && halfArrLen % 2 === 0){
//             return ((medianArray[medianArray.length - 1] + medianArray[medianArray.length - 2])/2)
//         }else if(medianArray.length === halfArrLen + 1 && halfArrLen % 2 !== 0){
//             return medianArray[medianArray.length - 1]
//         }
//     }

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