const http = require('http');
const url = process.argv[2];

http.get(url, function callback(response) {
	response.setEncoding('utf8');
	response.on('error', error => error);
	response.on('data', data => {
		console.log(data);
	});
}).on('error', error => error);
