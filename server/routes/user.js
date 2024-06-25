const router = require("express").Router();
const ctrls = require("../controllers/user");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/register", ctrls.register);
router.post("/login", ctrls.login);
router.get("/current", verifyToken, ctrls.getCurrent);
router.post("/refreshtoken", ctrls.refreshAccessToken);
router.get("/logout", ctrls.logout);
router.get("/forgot-password", ctrls.forgotPassword);
router.put("/resetpassword", ctrls.resetPassword);
router.get("/", [verifyToken, isAdmin], ctrls.getUser);
router.delete("/", [verifyToken, isAdmin], ctrls.deleteUser);
router.put("/current", [verifyToken], ctrls.updateUser);
router.put("/:uid", [verifyToken, isAdmin], ctrls.updateUserByAdmin);

// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?fdfdsf&fdfs

module.exports = router;
