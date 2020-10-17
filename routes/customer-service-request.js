const db = require("../models");
module.exports = function (app) {
	app.post("/api/services", function (req, res) {
		db.Service.create({
			serviceName: req.body.serviceName,
		}).then(function (dbService) {
			res.json(dbService);
		});
	});
};
