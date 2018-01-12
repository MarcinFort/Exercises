// My attempt at the HackerRank 'Project Euler #12: Highly Divisible triangular number' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/euler012
// Currently it is terminated due to timeout; but the algorithm functions correctly. To be optimised in the future


function processData(input) {
    //Enter your code here
    var input_arr = input.split("\n").splice(1).map(x => Number(x));
    
    var output_arr = [];
    
    function countDivisors(n) {
        var divisorCounter = 1;
        for (i = 1; i <= n/2; i++) {
            if (n % i === 0) {
                divisorCounter++;
            }
        }
        return divisorCounter;
    }
        
    input_arr.forEach(function(number) {
        var currentTriangleNumber = 1;
        var add = 1;
        
        while (countDivisors(currentTriangleNumber) <= number) {
            add += 1;
            currentTriangleNumber += add;
        }
                        
        output_arr.push(currentTriangleNumber);
        
    });
    
    console.log(output_arr.join("\n"));
    
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

