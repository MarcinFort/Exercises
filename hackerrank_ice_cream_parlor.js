// My attempt at the HackerRank 'Ice Cream Parlor' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/icecream-parlor


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

function icecreamParlor(m, arr) {
    // Complete this function
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === m) {
                return [i+1, j+1];
            }
        }
    }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var result = icecreamParlor(m, arr);
        console.log(result.join(" "));


    }

}

