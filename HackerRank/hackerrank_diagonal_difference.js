//My attempt at the Hackerrank 'Diagonal Difference' challenge
//https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/diagonal-difference


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

function diagonalDifference(a) {
    // Complete this function
    var diagonal1 = 0;
    var diagonal2 = 0;
    a.forEach((item, index) => diagonal1 += a[index][index]);
    a.forEach((item, index) => diagonal2 += a[index][a.length-1-index]);
    return Math.abs(diagonal1-diagonal2);
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}
