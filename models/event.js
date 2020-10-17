module.exports = function (sequelize, DataTypes) {
	const Events = sequelize.define("Event", {
		eventName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		eventDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		startTime: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		endTime: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		eventType: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		guestCount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		zipCode: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	Events.associate = function (models) {
		//Associating the Event with Customer. Event belongsTo to customer
		Events.belongsTo(models.Customer);

		// Associating Event with Services
		// When an Event is deleted, also delete any associated Services
		Events.hasMany(models.Service, {
			onDelete: "cascade",
		});
	};

	return Events;
};
