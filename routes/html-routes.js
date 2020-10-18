
let event = [{eventName: "underwaterBasketesrsfas"}]
module.exports = function (app) {


	app.get("/main", function (req, res) {
		res.render("../views/layouts/main");
	});

	app.get("/vendor-signup", function (req, res) {
		res.render("../views/layouts/vendor-signup");
	});

	app.get("/vendor-login", function (req, res) {
		res.render("../views/partials/vendor-login");
	});

	app.get("/customer-signup", function (req, res) {
		res.render("../views/layouts/customer-signup");
	});

	app.get("/customer-login", function (req, res) {
		if (req.user) {
			res.redirect("/customer-profile");
		  }
		//   res.sendFile(path.join(__dirname, "../views/partials/customer-login"));
		res.render("../views/partials/customer-login");
	});

	app.get("/vendor", function (req, res) {
		res.render("../views/layouts/vendor-services");
	});

	app.get("/customer", function (req, res) {
		res.render("../views/layouts/customer-service-request");
	});

	app.get("/event", function (req, res) {
		res.render("../views/layouts/customer-event-page");
	});

	app.get("/customer-create-event", function (req, res) {
		res.render("../views/layouts/customer-create-event");
	});

  	app.get("/services", function (req, res) {
    res.render("../views/layouts/customer-service-request");
  	});

	app.get("/vendor-bid", function (req, res) {
		res.render("../views/layouts/vendor-bid");
	});

	app.get("/customer-profile", function (req, res) {
		res.render("../views/customer-profile", {eventName: "Underwater basket weaving"})
	})
};
