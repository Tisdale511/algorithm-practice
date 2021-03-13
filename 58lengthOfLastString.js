var lengthOfLastWord = function(s) {
    if(s.length === 0){
        return  0
    }
    let sArr = s.split(' ');
    for(i = sArr.length - 1; i > -1; i -= 1){
        if(sArr[i] === ''){
            continue
        }else{
            return sArr[i].length
        }
    }
};

console.log(lengthOfLastWord("axfgbdfg  "))