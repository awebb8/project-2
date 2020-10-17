const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
	app.get("/api/customers", function (req, res) {
		// Here we add an "include" property to our options in our findAll query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Event
		db.Customer.findAll({
			include: [db.Event],
		}).then(function (dbCustomer) {
			res.json(dbCustomer);
		});
	});

	app.get("/api/customers", function (req, res) {
		res.json("hello")
	}),
	
	app.get("/api/customers/:id", function (req, res) {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Event
		db.Customer.findOne({
			where: {
				id: req.params.id,
			},
			include: [db.Event],
		}).then(function (dbCustomer) {
			res.json(dbCustomer);
		});
	});

	app.post("/api/customer-login", passport.authenticate("local"), function (req, res) {
		res.json(req.customer);
	});

	app.post("/api/customer-signup", function (req, res) {
		db.Customer.create({
			first_Name: req.body.first_Name,
			last_Name: req.body.last_Name,
			email: req.body.email,
		})
			.then(function () {
				res.redirect(307, "/api/customer-login");
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
	});

	app.delete("/api/customers/:id", function (req, res) {
		db.Customer.destroy({
			where: {
				id: req.params.id,
			},
		}).then(function (dbCustomer) {
			res.json(dbCustomer);
		});
	});

	 // Route for getting some data about our user to be used client side
	 app.get("/api/customer_data", function(req, res) {
		if (!req.customer) {
		  // The user is not logged in, send back an empty object
		  res.json({});
		} else {
		  // Otherwise send back the user's email and id
		  // Sending back a password, even a hashed password, isn't a good idea
		  res.json({
			email: req.customer.email,
			id: req.customer.id
		  });
		}
	  });
};

