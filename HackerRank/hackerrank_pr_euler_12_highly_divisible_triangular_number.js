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


// Another attempt - this one builds an array with triangular numbers and another with their divisors so as to avoid looping through already computed numbers. However, the algorithm is still terminated due to timeout.


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
    
    var triangle_numbers = [1];
    var number_divisors = [1];
    
    var currentTriangleNumber = 1;
    var add = 1;
    
    input_arr.forEach(function(number) {
        
        if (number < number_divisors[number_divisors.length-1]) {
           var index = number_divisors.findIndex(x => x > number);
           output_arr.push(triangle_numbers[index]);
        } else {
           while (countDivisors(currentTriangleNumber) <= number) {
            add += 1;
            currentTriangleNumber += add;
            triangle_numbers.push(currentTriangleNumber);
            number_divisors.push(countDivisors(currentTriangleNumber));
          }
          output_arr.push(currentTriangleNumber);
        }
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

