// My attempt at the HackerRank 'Project Euler #17: Number to Words' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/euler017

function processData(input) {
    //Enter your code here
    
    var arr = input.split("\n");
       
    let ones = {
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine"
    }
    
    let tens = {
        "0": "Ten",
        "1": "Eleven",
        "2": "Twelve",
        "3": "Thirteen",
        "4": "Fourteen",
        "5": "Fifteen",
        "6": "Sixteen",
        "7": "Seventeen",
        "8": "Eighteen",
        "9": "Nineteen"
    }
    
    let ties = {
        "2": "Twenty",
        "3": "Thirty",
        "4": "Forty",
        "5": "Fifty",
        "6": "Sixty",
        "7": "Seventy",
        "8": "Eighty",
        "9": "Ninety"
    }
    
    
    function toWord(num) {
        
        if (num === 1000000000000) {
            return "One Quadrillion";
        }
        
        var str = num.toString()
        
        var outputArr = [];
        
        for (j = str.length - 1; j >= 0; j--) {
            
            if (j === str.length - 4 && (str[j] !== "0" || str[j-1] !== "0" || str[j-2] !== "0")) {
                outputArr.unshift("Thousand");
            }
            
            if (j === str.length - 7 && (str[j] !== "0" || str[j-1] !== "0" || str[j-2] !== "0")) {
                outputArr.unshift("Million");
            }
            
            if (j === str.length - 10 && (str[j] !== "0" || str[j-1] !== "0" || str[j-2] !== "0")) {
                outputArr.unshift("Billion");
            }
                        
            if (((j === str.length - 3) || (j === str.length - 6) || (j === str.length - 9) || (j === str.length - 12)) && str[j] !== "0") {
                outputArr.unshift("Hundred");
                outputArr.unshift(ones[str[j]]);
            }
                
            if ((j === str.length - 1) || (j === str.length - 4) || (j === str.length - 7) || (j === str.length - 10)) {
                if (str[j-1] && str[j-1] === "1")  {
                    outputArr.unshift(tens[str[j]]);
                } else {
                    outputArr.unshift(ones[str[j]]);
                    if (str[j-1]) {
                        outputArr.unshift(ties[str[j-1]]);
                    }
                }
            }
        }
        
        return outputArr.filter(x => x !== undefined).join(" ");
    }
                    
    for (i = 1; i < arr.length; i++) {
        console.log(toWord(arr[i]));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

