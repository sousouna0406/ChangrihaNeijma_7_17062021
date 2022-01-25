const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  res.status(201).json({ message: "ok" });
};
exports.login = (req, res) => {
  res.status(201).json({ message: "ok" });
};
