/* Require express module*/
let express = require("express");
let addRoute = require("../controllers/buddyAdd.controller");
let deleteRoute = require("../controllers/buddyDelete.controller");
let readRoute = require("../controllers/buddyRead.controller");
let updateRoute = require("../controllers/buddyUpdate.controller");

let router = express.Router();
router.post("/add", addRoute);
router.delete("/delete", deleteRoute);
router.get("/read", readRoute.displayAllBuddy);
router.get("/read/:id", readRoute.displayOneBuddy);
router.put("/update", updateRoute);
module.exports = router;
 