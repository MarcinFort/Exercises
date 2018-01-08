// My attempt at the HackerRank 'Priyanka and Toys' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/priyanka-and-toys


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

function toys(w) {
    // Complete this function
    var sortedArr = w.sort((a,b) => a - b);
    var counter = 1;
    var current = sortedArr[0];
    for (i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] - current > 4) {
            counter++;
            current = sortedArr[i];
        }
    }
    return counter;
}

function main() {
    var n = parseInt(readLine());
    w = readLine().split(' ');
    w = w.map(Number);
    var result = toys(w);
    process.stdout.write("" + result + "\n");

}
