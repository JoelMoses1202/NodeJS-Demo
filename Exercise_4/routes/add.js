let express = require("express");
let router = express.Router();
let addRoute = require("../controllers/controlAdd");
router.post("/", addRoute);
module.exports = router;
