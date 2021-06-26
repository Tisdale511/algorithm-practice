var isPowerOfThree = function(n) {
    let numerator = Math.log(n)
    let denominator = Math.log(3)
    let log = numerator/denominator
    
    return log % 1 < 0.00000000000001
};