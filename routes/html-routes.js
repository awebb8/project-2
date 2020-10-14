const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

module.exports = function (app) {
  app.get("/main", function (req, res) {
    res.render("../views/layouts/main");
  });

  app.get("/vendor-signup", function (req, res) {
    res.render("../views/layouts/vendor-signup");
  });

  app.get("/customer-signup", function (req, res) {
    res.render("../views/layouts/customer-signup");
  });

  app.get("/vendor", function (req, res) {
    res.render("../views/layouts/vendor-services");
  });

  app.get("/customer", function (req, res) {
    res.render("../views/layouts/customer-services");
  });
};
