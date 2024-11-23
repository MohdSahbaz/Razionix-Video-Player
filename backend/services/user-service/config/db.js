const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    // logging: (msg) => {
    //   if (!msg.includes("SELECT 1+1 AS result")) {
    //     console.log(msg);
    //   }
    // },
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the PostgreSQL database!");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
})();

module.exports = sequelize;
