var orm = require('../config/orm.js');

var burger = {

	all: function(cb) {
		orm.all('burgers', function(res) {
			console.log("result in burger: " +res);
			cb(res);
		});
	},

	create: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	},

	update: function (updatecol, updateval, condition, cb) {
		orm.update('burgers', updatecol, updateval, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;

