const router = require("express").Router();
const ctrls = require("../controllers/productCategory");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyToken, isAdmin], ctrls.createCategory);
router.get("/", ctrls.getCategories);
router.put("/:pcid", [verifyToken, isAdmin], ctrls.updateCategory);
router.delete("/:pcid", [verifyToken, isAdmin], ctrls.deleteCategory);

// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?fdfdsf&fdfs

module.exports = router;
