const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

var hashPassFunc = (data) => {
	return crypto.createHash('md5').update(data).digest("hex");
};

module.exports.hashPassFunc = hashPassFunc;