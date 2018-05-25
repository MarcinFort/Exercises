// My attempt at the HackerRank 'Making Anagrams' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/making-anagrams


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

function makingAnagrams(s1, s2){
    // Complete this function
    var ss1 = s1.split("");
    var ss2 = s2.split("");
    
    for (i = 0; i < ss1.length; i++) {
        for (j = 0; j < ss2.length; j++) {
            if (ss1[i] === ss2[j]) {
                ss1[i] = null;
                ss2[j] = null;
            }
        }
    }
    
    return ss1.filter(x => x !== null).length + ss2.filter(x => x !== null).length;
    
}

function main() {
    var s1 = readLine();
    var s2 = readLine();
    var result = makingAnagrams(s1, s2);
    process.stdout.write("" + result + "\n");

}
