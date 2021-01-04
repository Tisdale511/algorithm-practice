var lengthOfLongestSubstring = function(s) {

    if (!s){
        return 0
    }

    let longest = 1
    let char = [s[0]]
    for (i = 0, j = 1; i < s.length && j < s.length; j += 1){ 
        if(!char.includes(s[j])){
            char.push(s[j])
            if(char.length > longest){
                console.log(char)
                longest = char.length
                j += 1
            }
        }else{
            i += 1
            char = [s[i]]
        }
    }
    return longest
}