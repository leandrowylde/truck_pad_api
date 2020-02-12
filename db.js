import Sequelize from "sequelize";
const config = require("./libs/config.js");
let sequelize = null;

//Módulo para configuração do Sequelize com Postgres
module.exports = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }
  return sequelize;
};
