var plusOne = function(digits) {
    let digStr = digits.join('')
    let hugeInt = BigInt(digStr)
    hugeInt ++
    // or hugeInt += BigInt(1)
    let plusOneArr = hugeInt.toString().split('')
    return plusOneArr
};