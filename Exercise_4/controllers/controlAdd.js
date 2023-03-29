const fs = require("fs");
const add = (req, res) => {
  let usersjson = fs.readFileSync("cdw_ace23_buddies.json", "utf-8");
  let users = JSON.parse(usersjson);
  users.push(req.body);
  usersjson = JSON.stringify(users);
  fs.writeFileSync("cdw_ace23_buddies.json", usersjson, "utf-8");
};
module.exports = add;
