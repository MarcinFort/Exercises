// My attempt at the HackerRank 'Project Euler 13: Large sum' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/euler013


function processData(input) {
    //Enter your code here
    var arr = input.split("\n");
    var output = [];
    var temp = 0;
    var carriage = 0;
    
    for (i = 49; i >= 0; i--) {
        temp = carriage;
        carriage = 0;
        for (j = 1; j < arr.length; j++) {
            temp += Number(arr[j].charAt(i));
        }
        output.unshift(temp.toString().charAt(temp.toString().length-1));
        if (temp.toString().length > 0) {
            carriage = Number(temp.toString().slice(0,temp.toString().length-1));
        }
    }
    
    if (carriage > 0) {
        output.unshift(carriage);
    }
    
    console.log(output.join("").slice(0,10));    
    
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

