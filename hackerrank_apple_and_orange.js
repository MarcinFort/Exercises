//My attempt at the HackeRank 'Apple and Orange' challenge
//https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/apple-and-orange


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

function appleAndOrange(s, t, a, b, apple, orange) {
    // Complete this function
    var apples = 0;
    var oranges = 0;
    for (i = 0; i < apple.length; i++) {
        if (a + apple[i] >= s && a + apple[i] <= t) {
            apples++;
        }
    }
    for (j = 0; j < orange.length; j++) {
        if (b + orange[j] >= s && b + orange[j] <= t) {
            oranges++;
        }
    }
    return [apples, oranges];
    
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    var result = appleAndOrange(s, t, a, b, apple, orange);
    console.log(result.join("\n"));

}

