var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exprhbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');


//Create express web server applicaiton
var app = express();
var PORT = process.env.PORT || 3000;

//use bodyParser middleware
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride('_method'));
app.engine('hbs', exprhbs({extname: 'hbs', defaultLayout: 'main', layoutDir: __dirname + '/view/layouts/'}));
app.set('view engine', 'hbs');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use('/', routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
