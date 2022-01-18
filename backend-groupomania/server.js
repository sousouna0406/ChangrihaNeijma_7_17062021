const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const authRouting = require("./routes/authRoute");

dotenv.config({
  path: "config/.env",
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouting);

app.listen(process.env.PORT || 3000);
