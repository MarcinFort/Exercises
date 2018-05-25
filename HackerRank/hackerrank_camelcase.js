// My attempt at the Hackerrank 'CamelCase' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/camelcase


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

function camelcase(s) {
    // Complete this function
    var counter = 1;
    var arr = s.split("");
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            counter++;
        }
    }
    return counter;
}

function main() {
    var s = readLine();
    var result = camelcase(s);
    process.stdout.write("" + result + "\n");

}

