/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

*/

// This is called a 'stack' dp, or LIFO; Last In is the First Out

var isValid = function(s) {
    if(s.length % 2 !== 0){
        return false
    }

    let left = {
        '{': 1,
        '[': 2,
        '(': 3
    }
    
    let right = {
        '}': 1,
        ']': 2,
        ')': 3
    }
    let brkArr = []
    for (let i = 0; i < s.length; i += 1){
        if(left[s[i]]){
            brkArr.push(s[i])
            console.log(brkArr)
        }else if(!brkArr.length || left[brkArr.pop()] !== right[s[i]]){
            return false
        }
    }
    return brkArr.length ? false : true
};

console.log(isValid("({[]}){[]}"))