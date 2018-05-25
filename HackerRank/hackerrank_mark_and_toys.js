// My attempt at the HackerRank 'Mark and Toys' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/mark-and-toys


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

function maximumToys(prices, k) {
    var sortedPrices = prices.sort((a, b) => (a - b));
    var counter = 0;
    for (i = 0; i < sortedPrices.length; i++) {
        if (k - sortedPrices[i] >= 0) {
            k -= sortedPrices[i];
            counter++;
        } else {
            break;
        }
    }
    return counter;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    prices = readLine().split(' ');
    prices = prices.map(Number);
    var result = maximumToys(prices, k);
    process.stdout.write("" + result + "\n");

}

