var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let result = '';
    for (let i = 0; i < strs[0].length; i += 1){
        for (let j = 1; j < strs.length; j += 1){
            if(strs[0][i] !== strs[j][i]) return result
        } 
        result += strs[0][i]
    }
    return result
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
