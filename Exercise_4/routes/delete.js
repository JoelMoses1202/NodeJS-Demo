let express = require("express");
let router = express.Router();
let fs = require("fs");
let createDelete = require("../controllers/controlDelete");
router.delete("/", createDelete);

module.exports = router;
