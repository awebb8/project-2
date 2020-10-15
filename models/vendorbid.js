module.exports = function (sequelize, DataTypes) {
	const Vendorbid = sequelize.define("Vendorbid", {
		bid_amount: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
	});

	Vendorbid.associate = function (models) {
		Vendorbid.belongsTo(models.Service);
	};
	return Vendorbid;
};
