/*

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

*/




// var removeElement = function(nums, val) {
    
//     do {
//         nums.splice(nums.indexOf(val), 1)
//     } while (nums.includes(val))
    
//     return nums.length
// };

// console.log(removeElement([3,2,2,3], 3))
// works just fine here, but leetcode won't accept this as a solution...?


var removeElement = function(nums, val) {
    
    while(nums.includes(val)){
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length
};

console.log(removeElement([3,2,2,3], 3))

// leet code accepts this solution instead...?