const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req, res, next) => {
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid access token" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "required authorization" });
  }
});
const isAdmin = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin") {
    return res
      .status(401)
      .json({ success: false, message: "REQUIRE ADMIN ROLE" });
  }
  next();
});
module.exports = {
  verifyToken,
  isAdmin,
};
