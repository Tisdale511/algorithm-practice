var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i += 1){
        if(nums[i] === target){
            return i
        }else if(nums[i] > target){
            return i
        }
    }
};

console.log(searchInsert([1,3,5,6], 5))