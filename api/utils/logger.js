var config = require ('../config');

let logger;

if (config.env == 'test' || config.env == 'local' || config.env == 'development') {
	logger = console;
} else {
	//caso o ambiente seja produção
	logger = console;
}

module.exports = logger;