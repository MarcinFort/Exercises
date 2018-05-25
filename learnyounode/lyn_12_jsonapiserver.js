const http = require('http');
const port = process.argv[2];
const url = require('url');

function parseTime(date) {
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	}
}

function unixTime(date) {
	return {
		"unixtime": date.getTime()
	}
}

const server = http.createServer(function(req, res) {
	let urlObj = url.parse(req.url, true);
	let date = new Date(urlObj.query.iso);
	if (urlObj.pathname === '/api/parsetime') {
		var response = JSON.stringify(parseTime(date));
	} else if (urlObj.pathname === '/api/unixtime') {
		var response = JSON.stringify(unixTime(date));
	}
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(response);
});

server.listen(port);
