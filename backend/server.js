const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("/api/auth");

app.listen(process.env.PORT || 3000);
