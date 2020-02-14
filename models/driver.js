"use strict";
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define(
    "Driver",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      gender: { type: DataTypes.STRING, allowNull: false },
      has_own_vehicle: { type: DataTypes.BOOLEAN, allowNull: false },
      cnh_type: { type: DataTypes.STRING, allowNull: false }
    },
    { underscored: true }
  );
  Driver.associate = function(models) {
    Driver.hasMany(models.Freight);
    // associations can be defined here
  };
  return Driver;
};
