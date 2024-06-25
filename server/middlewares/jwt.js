const jwt = require("jsonwebtoken");

const generateAccessToken = (usid, role) => {
  return jwt.sign({ _id: usid, role: role }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

const generateRefreshToken = (usid) => {
  return jwt.sign({ _id: usid }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
