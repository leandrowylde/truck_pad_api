"use strict";
module.exports = (sequelize, DataTypes) => {
  const TruckType = sequelize.define(
    "TruckType",
    {
      int_code: DataTypes.INTEGER,
      truck_type: DataTypes.STRING
    },
    { underscored: true }
  );
  TruckType.associate = function(models) {
    TruckType.hasMany(models.Truck);
    // associations can be defined here
  };
  return TruckType;
};
