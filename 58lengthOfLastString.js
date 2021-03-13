var lengthOfLastWord = function(s) {
    if(s.length === 0){
        return  0
    }
    let sArr = s.split(' ');
    for(i = sArr[sArr.length - 1]; i > -1; i -= 1){
        if(sArr[i] === ""){
            continue
        }else{
            console.log(sArr[i])
            return sArr[i].length
        }
    }
};

console.log(lengthOfLastWord("a  "))