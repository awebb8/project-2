require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.

// Parse application body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});


// Import routes and give the server access to them.
require("./routes/customer-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/vendor-api-routes.js")(app);
require("./routes/customer-service-request.js")(app);
require("./routes/event-api-routes.js")(app);

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
module.exports = app;