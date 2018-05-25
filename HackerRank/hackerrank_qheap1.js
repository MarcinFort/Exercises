// My attempt at the Hackerrank "QHEAP1" challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/qheap1
// It currently terminates due to timeout; but I believe that the algorithm is correct. I will certainly return to the problem in the future.


function processData(input) {
    //Enter your code here
    var inputArr = input.split('\n');
    var heap = [];
    var current;
    
    for (i = 1; i <= Number(inputArr[0]); i++) {
        switch(inputArr[i].charAt(0)) {
            case "1":
                heap.push(Number(inputArr[i].substring(2)));
                break;
            case "2":
                var index = heap.indexOf(Number(inputArr[i].substring(2)));
                heap.splice(index, 1);
                break;
            case "3":
                console.log(Math.min.apply(0, heap));
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
