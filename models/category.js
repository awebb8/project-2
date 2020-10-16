module.exports = function (sequelize, DataTypes) {
	const Category = sequelize.define("Category", {
		Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	Category.associate = function (models) {
		Category.belongsTo(models.Service);
	};
	return Category;
};
