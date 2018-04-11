const myfunction = require('./makeitmodular_module.js');
const path = process.argv[2] || ".";
const ext = process.argv[3] || "*";

myfunction(path, ext, function(err, list) {
	if(err) {
		return console.log(err);
	}
	list.forEach(x => console.log(x));
});

