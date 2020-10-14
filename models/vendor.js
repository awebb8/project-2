module.exports = function(sequelize, DataTypes) {
    var Vendors = sequelize.define("Vendor", {
      business_Name: DataTypes.STRING,
      category: DataTypes.STRING,
      first_Name: DataTypes.STRING, 
      last_Name: DataTypes.STRING, 
      email: DataTypes.STRING, 

    });
  
    Vendors.associate = function(models) {
        Vendors.hasMany(models.Events)
    };
    return Vendors;
  };
  
  Vendors.sync();
  
  module.exports = Customers;
  