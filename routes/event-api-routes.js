const db = require("../models");

module.exports = function (app) {
	app.get("/api/event", function (req, res) {
		// Here we add an "include" property to our options in our findAll query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Event
		db.Event.findAll({
			include: [db.service],
		}).then(function (dbEvent) {
			res.json(dbEvent);
		});
	});

	app.get("/api/events/:id", function (req, res) {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Event
		db.Event.findOne({
			where: {
				id: req.params.id,
			},
			include: [db.service],
		}).then(function (dbEvent) {
			res.json(dbEvent);
		});
	});
	app.post("/api/customer-create-event", function (req, res) {
		db.Event.create({
			eventName: req.body.eventName,
			eventDate: req.body.eventDate,
			startTime: req.body.startTime,
			endTime: req.body.endTime,
			eventType: req.body.eventType,
			guestCount: req.body.guestCount,
			address: req.body.address,
			city: req.body.city,
			state: req.body.state,
			zipCode: req.body.zipCode,
			description: req.body.description,
		})
			.then(function (dbEvent) {
				res.json(dbEvent);
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
	});

	app.delete("/api/events/:id", function (req, res) {
		db.Event.destroy({
			where: {
				id: req.params.id,
			},
		}).then(function (dbEvent) {
			res.json(dbEvent);
		});
	});
};
