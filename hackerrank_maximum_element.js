// My attempt at the Hackerrank "Maximum Element" challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/maximum-element/problem
// Currently, my score is 17.29/20.00 (to be improved in the future)


function processData(input) {
    //Enter your code here
    var inputarr = input.split("\n");
    var stack = []
    stack.push(parseInt(inputarr[0]));
    for (i = 1; i < inputarr.length; i++) {
        switch (inputarr[i]) {
            case "2": 
                if (stack.length !== 0) {
                    stack.pop()
                };
                break;
            case "3":
                if (stack.length !== 0) {
                    console.log(Math.max.apply(null, stack));
                };
                break;
            default: stack.push(parseInt(inputarr[i].substring(2)));
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


