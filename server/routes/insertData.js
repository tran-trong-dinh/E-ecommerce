const router = require("express").Router();
const ctrls = require("../controllers/insertData");

router.post("/", ctrls.insertProductData);
router.post("/insert-categories", ctrls.insertCategory);
module.exports = router;
