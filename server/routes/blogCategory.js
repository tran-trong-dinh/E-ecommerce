const router = require("express").Router();
const ctrls = require("../controllers/bolgCategory");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyToken, isAdmin], ctrls.createCategory);
router.get("/", ctrls.getCategories);
router.put("/:bcid", [verifyToken, isAdmin], ctrls.updateCategory);
router.delete("/:bcid", [verifyToken, isAdmin], ctrls.deleteCategory);

// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?

module.exports = router;
