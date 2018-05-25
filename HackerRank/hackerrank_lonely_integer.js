// My attempt at the HackerRank 'Lonely Integer' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/lonely-integer


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

function lonelyinteger(a) {
    // Complete this function
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (i !== j && a[i] === a[j]) {
                    a[i] = null;
                    a[j] = null;
            }
        }
    }
    return a.filter(x => x !== null);
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = lonelyinteger(a);
    process.stdout.write("" + result + "\n");

}
