






var threeSum = function(nums) {

    if(nums.length < 3){
        return []
    }
    let zeroSumArr = []
    let sortedNums = nums.sort((a, b) => a - b)
    let i = 0, j = i + 1, k = sortedNums.length -1
    while(i <= sortedNums.length - 3){
        if(sortedNums[i] > 0){
            return zeroSumArr
        }
        while(j < k){

            let iVal = sortedNums[i], jVal = sortedNums[j], kVal = sortedNums[k]
            let numSum = iVal + jVal + kVal
            let zeroVal = [iVal, jVal, kVal]
            
            if(numSum === 0 ){
                zeroSumArr.push(zeroVal)   
                while(sortedNums[--k] === sortedNums[k + 1]){}  
                while(sortedNums[++j] === sortedNums[j - 1]){}
            }else if(numSum > 0){
                k -= 1
            }else if(numSum < 0){
                j += 1
            }
        }
        while (sortedNums[++i] == sortedNums[i - 1]){}
        j = i + 1
        k  = sortedNums.length - 1
    }
    return zeroSumArr
}

// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0]))

// var threeSum = function(nums) {
//     let zeroSumArr = []
//     let sortedNums = nums.sort((a, b) => a - b)

//     if(sortedNums.length === 0) return []
//     for(i = 0; i < sortedNums.length - 2; i += 1){
//         for(j = i + 1; j < sortedNums.length - 1; j += 1){
//             for(k = j + 1; k < sortedNums.length; k += 1){
//                 let iVal = sortedNums[i], jVal = sortedNums[j], kVal = sortedNums[k]
//                 if(iVal + jVal + kVal === 0){
//                     let zeroVal = [iVal, jVal, kVal]
//                     if (!zeroSumArr.includes(zeroVal)){
//                         zeroSumArr.push(zeroVal)
//                     }
//                 }
//             }
//         }
//     }
//     // zeroSumArr = zeroSumArr.filter()
//     // console.log()
//     return zeroSumArr
// };

// console.log(threeSum([-1,0,1,2,-1,-4]))