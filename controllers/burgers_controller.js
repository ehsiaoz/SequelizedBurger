var express = require('express');
var router = express.Router();
var Burger = require('../models/burger.js');

router.get('/', function (req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
	Burger.findAll({}).then(function(data) {
		var hbsObject = { burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/', function (req, res){

	var burger = req.body;
	console.log("burger: ", burger);
	console.log("burger name: ", burger.burger_name);
	console.log("devoured: ", burger.devoured);

		Burger.create({
			burger_name: burger.burger_name,
			devoured: burger.devoured

		}).then(function(data) {
		res.redirect('/burgers');
	});
});

router.put('/:id', function (req, res){
	Burger.update(req.body,
	{
		where: {
			id: req.params.id
		}
	})
	.then(function(burger) {
		console.log("burgerupdated!");
		res.redirect('/burgers');
	});
});

module.exports = router;
