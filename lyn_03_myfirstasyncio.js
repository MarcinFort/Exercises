const fs = require('fs');

fs.readFile(process.argv[2], function callback(err, fileContents) {
	if (err) { return console.log(err) }
	console.log(fileContents.toString().split("\n").length - 1);
});

