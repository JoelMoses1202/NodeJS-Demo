let express = require("express");
let router = express.Router();
let fs = require("fs");
let createUpdate = require("../controllers/controlUpdate");
router.put("/", createUpdate);

module.exports = router;
