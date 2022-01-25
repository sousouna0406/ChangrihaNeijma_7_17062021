const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  res.status(200).json({ message: "signup" });
};
exports.login = (req, res) => {
  res.status(200).json({ message: "login" });
};
