// My attempt at the HackerRank 'Jesse and Cookies' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/jesse-and-cookies

// Still a wrong answer (does not cover all test cases), to be amended in the future

function processData(input) {
    //Enter your code here
    
    var arr = input.split('\n');
    var sweetnessThreshold = Number(arr[0].split(" ")[1]);
    var cookies = arr[1].split(" ").map(function(item) {return Number(item)});
    var counter = 0;
    
    if (cookies.length < 2) {
        console.log(-1);
        return;
    }
    
    cookies.sort(function(a, b){return a-b});

    while (cookies[0] < sweetnessThreshold) {
        var newCookie = cookies[0] + 2*cookies[1];
        cookies.splice(0,2);
        cookies.push(newCookie);
        cookies.sort(function(a, b) {return a-b});
        counter++;
        if (cookies.length < 2) {
            console.log(-1);
            return;
        }
    }
    
    console.log(counter > 0 ? counter : -1);
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

