let express = require("express");
let router = express.Router();

let createControll = require("../controllers/controlRead");
router.get("/", createControll.displayAll);
router.get("/:id", createControll.displayOne);

module.exports = router;
