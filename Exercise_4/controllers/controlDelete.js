let fs = require("fs");
const delet = (req, res) => {
  let val = req.body.employeeId;
  let usersjson = fs.readFileSync("cdw_ace23_buddies.json", "utf-8");
  let users = JSON.parse(usersjson);
  for (i = 0; i < users.length; i++) {
    if (users[i].employeeId === val + "") {
      users.splice(i, 1);
    }
  }
  usersjson = JSON.stringify(users);
  fs.writeFileSync("cdw_ace23_buddies.json", usersjson, "utf-8");
};
module.exports = delet;
