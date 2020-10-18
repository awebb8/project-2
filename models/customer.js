module.exports = function (sequelize, DataTypes) {
	const Customer = sequelize.define("Customer", {
		first_Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
      		validate: {
        		isEmail: true
      		}
		},
	});

	Customer.associate = function (models) {
		Customer.hasMany(models.Event);
	};
	return Customer;
};
