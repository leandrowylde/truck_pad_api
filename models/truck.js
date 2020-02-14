"use strict";
module.exports = (sequelize, DataTypes) => {
  const Truck = sequelize.define(
    "Truck",
    {
      plate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      truck_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { underscored: true }
  );
  Truck.associate = function(models) {
    Truck.hasMany(models.Freight);
    Truck.belongsTo(models.TruckType, {
      foreignKey: "truck_type_id",
      as: "truck_type"
    });
    // associations can be defined here
  };
  return Truck;
};
