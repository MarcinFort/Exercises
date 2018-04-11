const fs = require('fs');
const path_arg = process.argv[2];
const extension = "." + process.argv[3];
const path = require('path');


fs.readdir(path_arg, function callback(err, list) {

	for (i = 0; i < list.length; i++) {
		if (path.extname(list[i]) == extension) {
			console.log(list[i]);
		}
	}
});
