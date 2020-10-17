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
			.then(function () {
				res.redirect(307, "/api/vendor-login");
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
	});

	// Route for getting some data about our user to be used client side
	app.get("/api/vendor_data", function(req, res) {
		if (!req.Vendor) {
		  // The user is not logged in, send back an empty object
		  res.json({});
		} else {
		  // Otherwise send back the user's email and id
		  // Sending back a password, even a hashed password, isn't a good idea
		  res.json({
			email: req.Vendor.email,
			id: req.Vendor.id
		  });
		}
	  });
};

