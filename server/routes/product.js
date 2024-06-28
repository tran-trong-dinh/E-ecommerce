const router = require("express").Router();
const ctrls = require("../controllers/product");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const uploader = require("../config/cloudinary.config");

router.post("/", [verifyToken, isAdmin], ctrls.createProduct);
router.get("/", ctrls.getProducts);
router.put("/rating", verifyToken, ctrls.ratings);

router.put("/:pid", [verifyToken, isAdmin], ctrls.updateProduct);
router.put(
  "/upload-image/:pid",
  [verifyToken, isAdmin],
  uploader.array("images", 10),
  ctrls.uploadImagesProduct
);
router.delete("/:pid", [verifyToken, isAdmin], ctrls.deleteProduct);
router.get("/:pid", ctrls.getProduct);

// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?fdfdsf&fdfs

module.exports = router;
