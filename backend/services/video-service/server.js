const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5002;
const DB_URL = process.env.DB_URL;

// Middleware
app.use(express.json());

const connectDB = require("./config/db");
const videoRoute = require("./routes/videoRoute");

connectDB(DB_URL);

// Test Route
app.get("/", async (req, res) => {
  res.send("Video Service running!");
});

app.use("/video", videoRoute);

app.listen(PORT, () =>
  console.log(`Video Server running on http://localhost:${PORT}`)
);
