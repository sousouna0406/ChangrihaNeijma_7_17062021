const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getOneUser = (req, res) => {
  res.status(200).json({ message: "getOneUser" });
};
exports.deleteUser = (req, res) => {
  res.status(200).json({ message: "deleteUser" });
};
exports.updateUser = (req, res) => {
  res.status(200).json({ message: "updateUser" });
};
