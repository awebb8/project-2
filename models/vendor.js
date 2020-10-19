module.exports = function (sequelize, DataTypes) {
	var Vendor = sequelize.define("Vendor", {
		business_Name: DataTypes.STRING,
		category: DataTypes.STRING,
		state: DataTypes.STRING,
		first_Name: DataTypes.STRING,
		last_Name: DataTypes.STRING,
		email: DataTypes.STRING,
	});

	Vendor.associate = function (models) {
		Vendor.hasMany(models.Event);
	};
	return Vendor;
};
