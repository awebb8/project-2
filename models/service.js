module.exports = function (sequelize, DataTypes) {
	const Service = sequelize.define("Service", {
		// Giving the service  model a name of type STRING
		serviceName: DataTypes.STRING,
	});
	Service.associate = function (models) {
		// Associating Service with Services
		// When an Service is deleted, also delete any associated Services
		Service.belongsTo(models.Event, {
			foreignKey: {
				allowNull: false,
			},
		});
		Service.hasMany(models.Category, {
			foreignKey: {
				allowNull: false,
			},
		});
		Service.belongsTo(models.Vendor, {
			foreignKey: {
				allowNull: true,
			},
		});
	};

	return Service;
};
