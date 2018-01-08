// My attempt at the HackerRank 'Left Rotation' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/array-left-rotation


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

function leftRotation(a, d) {
    // Complete this function
    
    // It's more effective to calculate the final state virtually; modify the array only once
    
    if (a.length === d) {
        return a;
    }
    
    if (a.length > d) {
        var current = a.splice(0, d);
        a = a.concat(current);
    }
    
    if (a.length < d) {
        var new_d = d % a.length;
        var current = a.splice(0, new_d);
        a = a.concat(current);
    }
    
    return a;
    
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var d = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var result = leftRotation(a, d);
    console.log(result.join(" "));

}

