var connection = require('./connection.js');

var orm = {

	all: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			console.log("orm error: "+err);
			console.log("orm result: "+ JSON.stringify(result));
			if (err) {
				console.log("doh!");
			}
			cb(result);
		});
	},

	create: function (tableInput, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + tableInput;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + vals.toString();
		queryString = queryString + ')'
	},

	update: function (tableInput, updatecol, updateval, condition, cb) {
		var queryString = 'UPDATE ' + tableInput;

		queryString = queryString + ' SET ';
		queryString = queryString + col.toString();
		queryString = queryString + '=';
		queryString = queryString + '\'' + val.toString() + '\'';
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;
		queryString = queryString + ')'
	},
};

module.exports = orm;