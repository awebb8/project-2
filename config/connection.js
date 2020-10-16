require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: "culturalbash",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	test: {
		username: "root",
		password: "",
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		username: "root",
		password: "",
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};
