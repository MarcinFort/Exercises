let args = process.argv;
let sum = 0;

for (i = 2; i < args.length; i++) {
	sum += Number(args[i]);
}

console.log(sum);
