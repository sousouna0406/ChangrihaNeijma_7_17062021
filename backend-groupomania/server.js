const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({
  path: "config/.env",
});
const bodyParser = require("body-parser");
const { initDb } = require("./config/dbConfig");
const extraSetup = require("./config/extraSetup");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

console.log(1);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

initDb();
extraSetup();

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.listen(3000);
