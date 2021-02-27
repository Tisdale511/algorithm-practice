/*

*/


var searchRange = function(nums, target) {

    let startPoint = nums.indexOf(target);
    if(startPoint === -1){
        return [-1, -1]
    }
    let results = [startPoint];
    let i = startPoint;
    let endPoint = i;
    while(nums[i] === target){
        if(nums[i] === nums[i + 1]){
            endPoint = i + 1
            i += 1;
            continue
        }
        if(nums[i + 1] !== target){
            results.push(endPoint)
            break
        }
    }
    return results
};
// let points = [1,3]
let points = [1,3,56,2,5,8,8,7,4,2,23,6,7,8,1]
let sortedPoints = points.sort(function(a, b){return a-b});
// console.log(sortedPoints)
console.log(searchRange(sortedPoints, 8))
