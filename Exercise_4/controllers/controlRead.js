let express = require("express");
let fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const displayAll = (req, res) => {
  let usersjson = fs.readFileSync("cdw_ace23_buddies.json", "utf-8");
  let users = JSON.parse(usersjson);
  console.log(users);
  res.send("Read Route");
};

const displayOne = (req, res) => {
  let val = req.params["id"];
  let usersjson = fs.readFileSync("cdw_ace23_buddies.json", "utf-8");
  let users = JSON.parse(usersjson);
  for (i = 0; i < users.length; i++) {
    if (users[i].employeeId === val + "") {
      console.log(users[i]);
      res.send("Read Route");
    }
  }
};

module.exports = { displayAll, displayOne };
