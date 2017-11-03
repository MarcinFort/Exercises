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

function convertHexToDec(n) {
    var arr = n.toString().split("");
    var result = 0;
    var multiplier = 1;
    var tempValue;
    for (i = arr.length-1; i >= 0; i--) {
        switch (arr[i]) {
            case 'A': tempValue = 10;
            break;
            case 'B': tempValue = 11;
            break;
            case 'C': tempValue = 12;
            break;
            case 'D': tempValue = 13;
            break;
            case 'E': tempValue = 14;
            break;
            case 'F': tempValue = 15;
            break;
            default: tempValue = Number(arr[i]);
        }
        result += tempValue*multiplier;
        multiplier *= 16;
    }
    return result;
}

function convertDecToHex(n) {
   var arr = [];	
   var highestPower = 1;
   var exponent = 1;
   var counter = 0;

   // Find the highest power of 16 in the n
    
   while (highestPower*16 <= n) {
       highestPower *= 16;
       exponent += 1; // Equal to the length of the hex number; will be used for the loop later
    }
    	
   var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	
	// Loop through all positions of the hex number   
   
   for (i = 0; i < exponent; i++) {
      while (n - highestPower >= 0) {
         n -= highestPower;
	 counter++;
      }
     arr.push(hexValues[counter]);
     counter = 0;
     highestPower /= 16;
   }
   
   return arr.join("");
}

function convertBinaryToHex(n) {
    var arr = n.toString().split("").map(function(item) {return parseInt(item);});
     
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var arrHex = [];
    var tempVal = 0;
    var counterOfRepetitions = 0;
    var multiplier = 1;
    
    for (i = arr.length-1; i >= 0; i--) {
        tempVal += multiplier * arr[i];
        multiplier *= 2;
        counterOfRepetitions++;
        if (counterOfRepetitions % 4 === 0 || i == 0) {
            arrHex.unshift(hexValues[tempVal]);
            tempVal = 0;
            multiplier = 1;
        }
        console.log(tempVal);
    }

    return arrHex.join("");
}
