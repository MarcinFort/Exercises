// My attempt at the HackerRank 'Marc's Cakewalk' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/marcs-cakewalk


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

function marcsCakewalk(calorie) {
    // Complete this function
    var arr = calorie.sort((a , b) => b - a);
    var miles = 0;
    arr.forEach((item, i) => miles += (arr[i]*Math.pow(2, i)));
    return miles;
}

function main() {
    var n = parseInt(readLine());
    calorie = readLine().split(' ');
    calorie = calorie.map(Number);
    var result = marcsCakewalk(calorie);
    process.stdout.write("" + result + "\n");

}

