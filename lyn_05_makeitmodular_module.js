const fs = require('fs');
const path = require('path');

module.exports = function(path_arg, ext, callback) {

	let fullExt = "." + ext;

	fs.readdir(path_arg, function(err, list) {
		if (err) {
			return callback(err);
		} else {
			let filelist = list.filter(x => path.extname(x) == fullExt);
			return callback(null, filelist);
		}

	});

}
