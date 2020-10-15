module.exports = function (sequelize, DataTypes) {
	const Service = sequelize.define("Service", {
		// Giving the service  model a name of type STRING
		serviceName: DataTypes.STRING,
	});
	Service.associate = function (models) {
		// Associating Service with Services
		// When an Service is deleted, also delete any associated Services
		Service.belongsTo(models.Events, {
			foreignKey: {
				name: event_id,
				allowNull: false,
			},
		});
		Service.belongsTo(models.Categories, {
			foreignKey: {
				name: categoryId,
				allowNull: false,
			},
		});
		Service.belongsTo(models.Vendor, {
			foreignKey: {
				name: chosen_vendor_id,
				allowNull: true,
			},
		});
	};

	Service.sync();

	return Service;
};
