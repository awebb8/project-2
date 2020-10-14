module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customer", {
    first_Name: DataTypes.STRING,
    last_Name: DataTypes.STRING,
    email: DataTypes.STRING, 
  });

  Customers.associate = function(models) {
      Customers.hasMany(models.Events)
  };
  return Customers;
};

Customers.sync();

module.exports = Customers;
