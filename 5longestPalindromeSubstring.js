var longestPalindrome = function(s){
    let len = s.length       //     len = 8
    let longestLen = 1;
    let longestPal = s[0];

    for(let i = 0; i < s.length; i += 1){
        let leftOdd = leftEven = i - 1     // -1
        let rightOdd = i + 1    // 1
        let rightEven = i

        //some palindromes are odd length with a unique central character, kaYak
        while(leftOdd >= 0 && rightOdd < len ){
            if(s[leftOdd] ===  s[rightOdd]){
                const subLen = rightOdd - leftOdd + 1;
                if(subLen > longestLen) {   // we found a larger subPalindrome!
                    longestLen = subLen;
                    longestPal = s.slice(leftOdd, rightOdd+1);
                }
                leftOdd -= 1;
                rightOdd += 1;
            } else {
                break;  // Not palindromic from this center; break out
            }
        }
        // Input: aaaa
        //   len = 4    i = 2     left = 0  
       //// test aaa => left  = -1      test aaaa 

        //other palindromes are even-lengthed, mirrors of each other along their center     cannac
        while(leftEven >= 0 && rightEven < len ){
            if(s[leftEven] ===  s[rightEven]){
                const subLen = rightEven - leftEven + 1;
                if(subLen > longestLen) {   // we found a larger subPalindrome!
                    longestLen = subLen;
                    longestPal = s.slice(leftEven, rightEven+1);
                }
                leftEven -= 1;
                rightEven += 1;
            } else {
                break;
            }
        }
    }
    return longestPal;   
}