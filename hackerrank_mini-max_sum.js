// My attempt at the HackerRank 'Mini-Max Sum' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/mini-max-sum


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function miniMaxSum(arr) {
    // Complete this function
    var sortArr = arr.sort((a, b) => a - b);
    var smallest = sortArr.slice(0,4).reduce((a, b) => a + b, 0);
    var biggest = sortArr.slice(1).reduce((a, b) => a + b, 0);
    console.log(smallest+" "+biggest);
}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    miniMaxSum(arr);

}
