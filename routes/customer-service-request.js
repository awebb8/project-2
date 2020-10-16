const db = require("../models");
module.exports = function (app) {
	app.get("/api/services", function (req, res) {
		res.json("hello");
	});
	app.post("/api/services", function (req, res) {
		db.Service.create({
			serviceName: req.body.newService,
		}).then(function (dbService) {
			res.json(dbService);
		});
		console.log("hello");
	});
};
