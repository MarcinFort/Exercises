const http = require('http');
const url = process.argv[2];


// Method 1: Manually collecting the data

let outputStr = "";

http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on('error', error => console.error);
	response.on('data', data => outputStr += data);
	response.on('end', () => {
		console.log(outputStr.length);
		console.log(outputStr);
	});
}).on('error', error => console.error);


