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
        if (counterOfRepetitions % 4 === 0 || i === 0) {
            arrHex.unshift(hexValues[tempVal]);
            tempVal = 0;
            multiplier = 1;
        }
    }

    return arrHex.join("");
}


function convertHexToBinary(n) {
    var arr = n.toString().split("");
    var arrBin = [];
    // This seems to be the simplest solution in this case
    for (i = arr.length-1; i >= 0; i--) {
        switch (arr[i]) {
            case '0': arrBin.unshift("0", "0", "0", "0");
            break;
            case '1': arrBin.unshift("0", "0", "0", "1");
            break;
            case '2': arrBin.unshift("0", "0", "1", "0");
            break;
            case '3': arrBin.unshift("0", "0", "1", "1");
            break;
            case '4': arrBin.unshift("0", "1", "0", "0");
            break;
            case '5': arrBin.unshift("0", "1", "0", "1");
            break;
            case '6': arrBin.unshift("0", "1", "1", "0");
            break;
            case '7': arrBin.unshift("0", "1", "1", "1");
            break;
            case '8': arrBin.unshift("1", "0", "0", "0");
            break;
            case '9': arrBin.unshift("1", "0", "0", "1");
            break;
            case 'A': arrBin.unshift("1", "0", "1", "0");
            break;
            case 'B': arrBin.unshift("1", "0", "1", "1");
            break;
            case 'C': arrBin.unshift("1", "1", "0", "0");
            break;
            case 'D': arrBin.unshift("1", "1", "0", "1");
            break;
            case 'E': arrBin.unshift("1", "1", "1", "0");
            break;
            case 'F': arrBin.unshift("1", "1", "1", "1");
            break;
        }
    }
        while (arrBin[0] === "0") {
            arrBin.shift();
        }
        
        return arrBin.join("");
}


function convertDecToOctal(n) {
   var arr = [];
   var highestPower = 1;
   var exponent = 1;
   var counter = 0;

   // Find the highest power of 8 in the n

   while (highestPower*8 <= n) {
       highestPower *= 8;
       exponent += 1; // Equal to the length of the octal number; will be used for the loop later
    }

   // Loop through all positions of the octal number   

   for (i = 0; i < exponent; i++) {
      while (n - highestPower >= 0) {
         n -= highestPower;
         counter++;
      }
     arr.push(counter);
     counter = 0;
     highestPower /= 8;
   }

   return arr.join("");
}

function convertOctalToDec(n) {
    var arr = n.toString().split("").map(function(item) {return parseInt(item);});
    var result = 0;
    var multiplier = 1;
    for (i = arr.length-1; i >= 0; i--) {
        result += multiplier * arr[i];
        multiplier *= 8;
    }
    return(result);
}

function convertBinaryToOctal(n) {
    var arr = n.toString().split("").map(function(item) {return parseInt(item);});
    var arrOct = [];
    var tempVal = 0;
    var counterOfRepetitions = 0;
    var multiplier = 1;

    for (i = arr.length-1; i >= 0; i--) {
        tempVal += multiplier * arr[i];
        multiplier *= 2;
        counterOfRepetitions++;
        if (counterOfRepetitions % 3 === 0 || i === 0) {
            arrOct.unshift(tempVal);
            tempVal = 0;
            multiplier = 1;
        }
    }

    return arrOct.join("");
}


function convertHexToOctal(n) {
    return convertDecToOctal(convertHexToDec(n));
	// A crude workaround for now; still trying to find an algorithm for conversion which does not involve decimal at any stage
}

function convertOctalToBinary(n) {
    var arr = n.toString().split("");
    var arrBin = [];
    // This seems to be the simplest solution in this case
    for (i = arr.length-1; i >= 0; i--) {
        switch (arr[i]) {
            case '0': arrBin.unshift("0", "0", "0");
            break;
            case '1': arrBin.unshift("0", "0", "1");
            break;
            case '2': arrBin.unshift("0", "1", "0");
            break;
            case '3': arrBin.unshift("0", "1", "1");
            break;
            case '4': arrBin.unshift("1", "0", "0");
            break;
            case '5': arrBin.unshift("1", "0", "1");
            break;
            case '6': arrBin.unshift("1", "1", "0");
            break;
            case '7': arrBin.unshift("1", "1", "1");
            break;
        }
    }

    while (arrBin[0] === "0") {
        arrBin.shift();
    }

    return arrBin.join("");
}

function convertOctalToHex(n) {
    return convertDecToHex(convertOctalToDec(n));
        // A crude workaround for now; still trying to find an algorithm for conversion which does not involve decimal at any stage
}
