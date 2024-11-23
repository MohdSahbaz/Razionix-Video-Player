const mongoose = require("mongoose");

const connectDB = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to the MongoDB database!");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
