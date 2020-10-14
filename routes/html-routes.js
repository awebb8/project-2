const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

module.exports = function (app) {
  app.get("/main", function (req, res) {
    res.render("../views/layouts/main");
  });

  app.get("/signup", function (req, res) {
    res.render("../views/layouts/signup");
  });

  app.get("/vendor", function (req, res) {
    res.render("../views/layouts/vendor-services");
  });

  app.get("/customer", function (req, res) {
    res.render("../views/layouts/customer-services");
  });
};
