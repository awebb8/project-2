module.exports = function (sequelize, DataTypes) {
	const Event = sequelize.define(
		"Event",
		{
			// Giving the event  model a name of type STRING
			name: DataTypes.STRING,
		},
		{
			date: DataTYPES.DATE,
		},
		{
			startTime: DataTYPES.TIME,
		},
		{
			endTime: DataTYPES.TIME,
		},
		{
			eventType: DataTYPES.STRING,
		}
	);

	Event.associate = function (models) {
		// Associating Event with Services
		// When an Event is deleted, also delete any associated Services
		Event.hasMany(models.Service, {
			onDelete: "cascade",
		});
		
	};

	return Event;
};
