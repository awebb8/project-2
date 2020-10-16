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
		res.json(req.Customer);
	});

	app.post("/api/customer-signup", function (req, res) {
		db.Customer.create({
			first_Name: req.body.first_Name,
			last_Name: req.body.last_Name,
			email: req.body.email,
		})
			.then(function (dbCustomer) {
				res.json(dbCustomer);
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
};
