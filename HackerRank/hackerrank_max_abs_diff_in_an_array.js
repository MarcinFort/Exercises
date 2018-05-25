// My attempt at the HackerRank 'Minimum Absolute Difference in an Array'
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/minimum-absolute-difference-in-an-array

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

function minimumAbsoluteDifference(n, arr) {
    // Complete this function
    arr = arr.sort((a, b) => a - b);
    var diff = 1000000000;
    for (i = 1; i <= arr.length; i++) {
        if (Math.abs(arr[i]-arr[i-1]) < diff) {
            diff = Math.abs(arr[i]-arr[i-1]);
        }
    }
    return diff;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = minimumAbsoluteDifference(n, arr);
    process.stdout.write("" + result + "\n");

}

