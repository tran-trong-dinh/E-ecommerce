const router = require("express").Router();
const ctrls = require("../controllers/blog");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyToken, isAdmin], ctrls.createNewBlog);
router.get("/", ctrls.getBlogs);
router.get("/one/:bid", ctrls.getBlog);
router.put("/:bid", [verifyToken, isAdmin], ctrls.updateBlog);
router.put("/like/:bid", verifyToken, ctrls.likeBlog);
router.put("/dislike/:bid", verifyToken, ctrls.dislikeBlog);
router.delete("/:bid", [verifyToken, isAdmin], ctrls.deleteBlog);

// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?

module.exports = router;
