function convertBinaryToDec(n) {
    var arr = n.toString().split("").map(function(item) {return parseInt(item);});
    var result = 0;
    var multiplier = 1;
    for (i = arr.length-1; i >= 0; i--) {
        result += multiplier * arr[i];
        multiplier *= 2;
    }
    return(result);
}

function convertDecToBinary(n) {
    var arr = [];
    var highestPower = 1;
    var exponent = 1; 
    
    // Find the highest power of 2 in the n
    
    while (highestPower*2 <= n) {
        highestPower *= 2;
        exponent += 1; // Equal to the length of the binary number; will be used for the loop later
    }

    // Loop through all the positions of the binary number
    
    for (i = 0; i < exponent; i++) {
        if (n - highestPower >= 0) {
            n -= highestPower;
            highestPower /= 2;
            arr.push(1);
        } else {
            highestPower /= 2;
            arr.push(0);
        }
    }
    return parseInt(arr.join(""));    
}
