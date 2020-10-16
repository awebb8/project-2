const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/vendor-login", passport.authenticate("local"), function (req, res) {
        res.json(req.Vendor);
    });

    app.post("/api/vendor-signup", function (req, res) {
		db.Vendor.create({
            business_Name: req.body.business_Name,
            category: req.body.category,
            first_Name: req.body.first_Name,
			last_Name: req.body.last_Name,
			email: req.body.email,
		})
			.then(function (dbVendor) {
				res.json(dbVendor);
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
	});
};

