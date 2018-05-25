const http = require ('http');
const url = process.argv;
const bl = require('bl');

let index = 2;


function logURL(index) {
	http.get(url[index], function callback(response) {
		response.pipe(bl(function (err,data) {
			if (err) {
				console.error(err);
			} 	
			console.log(data.toString());
			index++;
			logURL(index);
		}));
	});
}


logURL(index);


