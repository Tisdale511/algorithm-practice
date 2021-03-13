var plusOne = function(digits) {
    let digStr = digits.join('')
    let digInt = parseInt(digStr, 10)
    digInt += 1
    let plusOneArr = digInt.toString().split('')
    return plusOneArr
};