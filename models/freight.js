"use strict";
module.exports = (sequelize, DataTypes) => {
  const Freight = sequelize.define(
    "Freight",
    {
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      latitude_origin: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isFloat: true,
          max: 85.05112878,
          min: -85.05112878
        }
      },
      longitude_origin: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isFloat: true,
          max: 180.0,
          min: -180.0
        }
      },
      latitude_destination: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isFloat: true,
          max: 85.05112878,
          min: -85.05112878
        }
      },
      longitude_destination: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isFloat: true,
          max: 180.0,
          min: -180.0
        }
      },
      has_load_to_origin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      check_in_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        defaultValue: sequelize.NOW
      },
      truck_id: { type: DataTypes.INTEGER, allowNull: false },
      driver_id: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      // classMethods: {
      //   associate: models => {
      //     Freight.hasOne(models.Driver);
      //     Freight.hasOne(models.Truck);
      //   }
      // }
      underscored: true
    }
  );
  Freight.associate = function(models) {
    Freight.belongsTo(models.Driver, { foreignKey: "driver_id", as: "driver" });
    Freight.belongsTo(models.Truck, { foreignKey: "truck_id", as: "truck" });
    // associations can be defined here
  };
  return Freight;
};
