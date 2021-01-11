/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

PLAN OF ATTACK:
1) remove whitespace in front of integer
2) ensure that the sign (-/+) is preserved 
3) remove all characters after after initial integer of string
4) if the first character of the string is a not an integer, or the string has no value, return 0
5) remove EVERY part of the string after the integer, if there is anything to remove
*/

let myAtoi = function(s){
    let accChars = '1234567890'.split('')
    let signs = ['-', '+']
    let intArr = []

    for (let i = 0; i < s.length; i += 1){
        const hasChars = accChars.includes(s[i])
        if(intArr.length === 0 && s[i] === ' '){
            continue
        }else if(intArr.length === 0 && signs.includes(s[i])){
            intArr.push(s[i])
        }else if (hasChars){   
            intArr.push(s[i])
        }else if(intArr.length > 0 && !hasChars ) {
            break
        }else if (s[i] !== ' ' &&  s[i] !== '-' && s[i] !== '+' && !hasChars){
            return 0
        }    
    }    
    let strVal = intArr.join('')
    if(strVal === '-' || strVal === '' || strVal === '+'){
        return 0
    }
    
    let intVal = parseInt(strVal, 10)
    let boundary = Math.pow(2, 31) 

    if(intVal < -boundary){
        intVal = -boundary
    }else if(intVal > boundary - 1) {
        intVal = boundary - 1
    }
    return intVal
}

console.log(myAtoi("   +0 123"))
