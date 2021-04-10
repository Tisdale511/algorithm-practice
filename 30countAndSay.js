const countAndSay = function(n){
    if(n === 1) return '1';
    
    const str = countAndSay(n - 1);
    let result = '';
    let count = 0;
    let curChar;
    for(let i = 0; i <= str.length; i += 1){
        const thisChar = str[i];
        if(thisChar === curChar){
            count += 1;
        }else{
            if(count){
                result += count + curChar;
            }
            count = 1;
            curChar = thisChar;
            console.log(curChar)
        }
    }
    // console.log(result, str)
    return result;
}
console.log(countAndSay(4))