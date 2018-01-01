// My attempt at the HackerRank 'Super Reduced String' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/reduced-string


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

function super_reduced_string(s){
    // Complete this function
    var arr = s.split("");
    var changes = 0;
          
    do {
        changes = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i+1]) {
                changes++;
                arr.splice(i, 2);
            }
        }
    } while (changes !== 0);
    
    return arr.length > 0 ? arr.join("") : "Empty String";
}

function main() {
    var s = readLine();
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");

}
