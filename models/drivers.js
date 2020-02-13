module.exports = (sequelize, DataType) => {
  const Drivers = sequelize.define(
    "Drivers",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      age: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      gender: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      hasTruck: {
        type: DataType.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        defaultValue: false
      },
      cnhType: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      loaded: {
        type: DataType.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      classMethods: {
        associate: models => {
          Drivers.hasOne(models.Trucks);
        }
      }
    }
  );
  return Drivers;
};
