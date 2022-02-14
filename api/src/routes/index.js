const { Router } = require("express");
const {GetMessage} = require("../controllers/GetMessages")
const {PostMessage} = require("../controllers/PostMessage")
const {PutMessage} = require("../controllers/PutMessage")
const {DelMessage} = require("../controllers/DelMessage")
const router = Router();

router.get("/messages", GetMessage);
router.post("/messages", PostMessage);
router.put("/messages", PutMessage);
router.delete("/messages/:messageid", DelMessage);

module.exports = router;