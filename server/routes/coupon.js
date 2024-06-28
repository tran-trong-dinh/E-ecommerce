const router = require("express").Router();
const ctrls = require("../controllers/coupon");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
router.post("/", [verifyToken, isAdmin], ctrls.createNewCoupon);
router.get("/", ctrls.getCoupons);

router.put("/:cid", [verifyToken, isAdmin], ctrls.updateCoupon);
router.delete("/:cid", [verifyToken, isAdmin], ctrls.deleteCoupon);
module.exports = router;
