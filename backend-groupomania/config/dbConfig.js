const { Sequelize } = require("sequelize");

// configuration de Sequelize
const sequelize = new Sequelize(
  `mysql://${process.env.BDD_USER}:${process.env.BDD_PWD}@localhost:3306/groupomania`
);
async function initDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, initDb };
