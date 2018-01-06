// My attempt at the HackerRank 'Dynamic Array' challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/dynamic-array


function processData(input) {
    //Enter your code here
    var inp = input.split("\n").map(x => x.split(" ").map(y => Number(y)));
    var seqList = new Array(Number(inp[0][0]));
    for (a = 0; a < seqList.length; a++) {
        seqList[a] = [];
    }
    var lastAnswer = 0;
    
    for (i = 1; i < inp.length; i++) {
            var index = (inp[i][1] ^ lastAnswer) % inp[0][0];
            if (inp[i][0] === 1) {
                seqList[index].push(inp[i][2]);
            } else {
                lastAnswer = seqList[index][inp[i][2] % seqList[index].length];
                console.log(lastAnswer);
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
