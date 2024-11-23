const express = require("express");
const app = express();

const sequelize = require("./config/db");
const userRoute = require("./routes/userRoute");

require("dotenv").config();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("User Service is running!");
});

app.use("/user", userRoute);

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized!");
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to synchronize database:", error.message);
  }
});
