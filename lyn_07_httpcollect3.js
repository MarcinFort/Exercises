const http = require('http');
const url = process.argv[2];

// Method 3: using the concat-stream library

const concatStream = require('concat-stream');

http.get(url, function(response) {
	response.pipe(concatStream((data) => {
		console.log(data.toString().length);
		console.log(data.toString());
	}));
}).on('error', error => console.error);
