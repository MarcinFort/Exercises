// My attempt at the HackerRank '2D Array - DS' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/2d-array

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    function calculateHourglassValue(i, j) {
        return arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1]+ arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
    }
    
    var highest = -63; // the lowest possible sum of 7 numbers in the (-9, 9) range
    
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (calculateHourglassValue(i,j) > highest) {
                highest = calculateHourglassValue(i,j);
            }
        }
    }
    
    console.log(highest);
}
