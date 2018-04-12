const http = require ('http');
const url = process.argv[2];

// Method 2: Using the bl library

const bl = require('bl');

http.get(url, function(response) {
	response.pipe(bl(function (err,data) {
		if (err) {
			console.error(err);
		}
		console.log(data.toString().length);
		console.log(data.toString());
	}));
}).on('error', error => console.error);
