var lengthOfLastWord = function(s) {
    if(s.length === 0){
        return  0
    }
    let sArr = s.split(' ');
    console.log(sArr)
    return sArr[sArr.length - 1].length
};

console.log(lengthOfLastWord("a "))