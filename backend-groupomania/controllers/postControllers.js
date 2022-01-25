const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllpost = (req, res) => {
  res.status(200).json({ message: "getAllpost" });
};
exports.getOnepost = (req, res) => {
  res.status(200).json({ message: "getOnepost" });
};
exports.createPost = (req, res) => {
  res.status(200).json({ message: "createPost" });
};
exports.updatePost = (req, res) => {
  res.status(200).json({ message: "updatePost" });
};
exports.deletePost = (req, res) => {
  res.status(200).json({ message: "deletePost" });
};
