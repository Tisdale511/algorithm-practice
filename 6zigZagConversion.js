// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// PAHN
// APLSIIG 
// YIR

var convert = function(s, numRows) {
    if(numRows === 1){
        return s
    }

    let charArr = []
    let changeRow = 1
    let rowIdx = 0
    for(let i = 0; i <  numRows; i += 1){
        charArr[i] = []
    }
    for(let i = 0; i < s.length; i += 1){
        charArr[rowIdx].push(s[i])
        console.log(charArr)
        if(rowIdx === numRows - 1){
            changeRow = -1
        }else if(rowIdx === 0){
            changeRow = 1
        }
        rowIdx += changeRow
    }
    return charArr.flat().join('')
}

console.log(convert("PAYPALISHIRING", 3))