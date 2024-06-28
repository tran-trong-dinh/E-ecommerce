const router = require("express").Router();
const controller = require("../controllers/brand");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyToken, isAdmin], controller.createNewBrand);
router.get("/", controller.getBrands);

router.put("/:bid", [verifyToken, isAdmin], controller.updateBrand);
router.delete("/:bid", [verifyToken, isAdmin], controller.deleteBrand);
module.exports = router;
