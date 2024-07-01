const router = require("express").Router();
const ctrls = require("../controllers/order");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyToken, isAdmin], ctrls.createOrder);
router.get("/", verifyToken, ctrls.getUserOrder);
router.get("/admin", [verifyToken, isAdmin], ctrls.getOrders);
router.put("/status/:oid", [verifyToken, isAdmin], ctrls.updateStatus);
// router.delete('/:bid', [verifyToken, isAdmin], ctrls.deleteBlog);
module.exports = router;
