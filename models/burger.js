// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Burger = sequelize.define("burgers", {

	id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true

	},
  // the routeName gets saved as a string
  burger_name: {
			type: Sequelize.STRING,
			allowNull: false
	},
  // the name of the character (a string)
	devoured: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
			allowNull: false
	}
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
