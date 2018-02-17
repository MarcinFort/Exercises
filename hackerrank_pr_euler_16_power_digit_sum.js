// My attempt at the HackerRank 'Project Euler #16: Power Digit Sum Challenge'
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/euler016
// The code is terminated due to timeout, but the algorithm works correctly. To be corrected in the future.


function processData(input) {
    //Enter your code here
    var arr = input.split("\n");
    
    var twoTo53 = Math.pow(2,53).toString().split("");
    
    var printSum = function(numb) {
        console.log(numb.toString().split("").reduce( (x, y) => Number(x) + Number(y) ));
    }
    
    var calcPow = function(pow) {
        var power = pow - 53;
        var output = twoTo53;
        var carriage = 0;
        for (j = 0; j < power; j++) {
            var new_outp = [];
            for (k = output.length - 1; k >= 0; k--) {
                if (Number(output[k])*2 < 10) {
                    new_outp.unshift((Number(output[k])*2+carriage).toString());
                    carriage = 0;
                } else {
                    new_outp.unshift((Number(output[k])*2+carriage).toString()[1]);
                    carriage = 1;
                }
            }
            if (carriage !== 0) {
                new_outp.unshift(carriage.toString());
                carriage = 0;
            }
            output = new_outp;
        }
       return output.join("");
    }
    
    for (i = 1; i < arr.length; i++) {
        if (arr[i] <= 53) {
            var num = Math.pow(2, arr[i]);  
            printSum(num);
        } else {
            var num = calcPow(arr[i]);
            printSum(num);
        }
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

