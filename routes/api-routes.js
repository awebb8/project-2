const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
	app.post("/api/login", passport.authenticate("local"), function (req, res) {
		res.json(req.customer);
	});
};

