var reverse = function(x) {

    if (Math.sign(x) === -1){
        abs = Math.abs(x)
        val = abs.toString().split('').reverse().join('')
        // result = parseInt(val, 10)
        result = parseInt(val, 10)
        if(-result < -Math.pow(2, 31)){
            return 0
        }else{
            return -result
        }
    }else{
        val = x.toString().split('').reverse().join('')
        result = parseInt(val, 10)
        if(result > Math.pow(2, 31) - 1){
            return 0
        }else{
            return result
        }
    }    
    
};

console.log(reverse(-2608261751))