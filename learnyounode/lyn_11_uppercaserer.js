const http = require('http');
const port = process.argv[2];
const map = require('through2-map');

const uppercaser = map(function(chunk) {
	return chunk.toString().toUpperCase();	
});

const server = http.createServer(function(req, res) {
	if (req.method !== 'POST') {
		res.end('I accept only POST methods\n');
	}
	req.pipe(uppercaser).pipe(res);
});

server.listen(port);
