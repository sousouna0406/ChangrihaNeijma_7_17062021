const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

const authRouting = require("./routes/authRoutes");
const postRouting = require("./routes/postRoutes");
const userRouting = require("./routes/userRoutes");

dotenv.config({
  path: "config/.env",
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/post", postRouting);
app.use("/api/auth", authRouting);
app.use("/api/user", userRouting);

app.listen(process.env.PORT || 3000);
