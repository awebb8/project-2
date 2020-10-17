require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/bidbash-controller.js");
require("./routes/html-routes.js")(app);
require("./routes/customer-api-routes.js")(app);
require("./routes/vendor-api-routes.js")(app);
require("./routes/services-api-routes")(app);
// app.use(routes);
// Start our server so that it can begin listening to client requests.
db.sequelize
	//.sync()
	.sync({ force: true })
	.then(function () {
		app.listen(PORT, function () {
			console.log("Server listening on: http://localhost:" + PORT);
		});
	});
// .catch(function (err, res) {
// 	res.status(401).json(err);
// });
