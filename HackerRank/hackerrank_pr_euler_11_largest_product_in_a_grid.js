// My attempt at the HackerRank 'Project Euler #11: Largest product in a grid' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/euler011

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

function main() {
    var grid = [];
    for(grid_i = 0; grid_i < 20; grid_i++){
       grid[grid_i] = readLine().split(' ');
       grid[grid_i] = grid[grid_i].map(Number);
    }
   
    var greatest = 0;
    var current;
    var test = function() {
        if (current > greatest) {
                greatest = current;
            }
    }
    
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 20; j++) {
            if (j < 17) {
                current = grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3];
                test();
            }
            if (i < 17) {
                current = grid[i][j] * grid[i+1][j] * grid[i+2][j] * grid[i+3][j];
                test();
            }
            if (i < 17 && j < 17) {
                current = grid[i][j] * grid[i+1][j+1] * grid[i+2][j+2] * grid[i+3][j+3];
                test();
            }
            if (i < 17 && j > 2) {
                current = grid[i][j] * grid[i+1][j-1] * grid[i+2][j-2] * grid[i+3][j-3];
                test();
            }
        }
    }
    
    console.log(greatest);
    
    
}
