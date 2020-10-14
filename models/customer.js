module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customer", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING, 
  });

  Customers.associate = function(models) {
      Customers.hasMany(models.Events)
  };
  return Customers;
};

Customers.sync();

module.exports = Customers;
