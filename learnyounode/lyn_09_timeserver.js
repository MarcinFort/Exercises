const net = require('net');
const port = process.argv[2];

function fill_zero(num) {
	if (num < 10) {
		return "0" + num;
	} else { 
		return "" + num;
	}
}

const server = net.createServer(function(socket) {
	let currDate = new Date();
	let output = `${fill_zero(currDate.getFullYear())}-${fill_zero(currDate.getMonth()+1)}-${fill_zero(currDate.getDate())} ${fill_zero(currDate.getHours())}:${fill_zero(currDate.getMinutes())}\n`;
	socket.end(output);

});

server.listen(port);
