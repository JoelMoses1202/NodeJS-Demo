let fs = require("fs");
const update = (req, res) => {
  let val = req.body.employeeId;
  console.log(val);
  let usersjson = fs.readFileSync("cdw_ace23_buddies.json", "utf-8");
  let users = JSON.parse(usersjson);
  for (i = 0; i < users.length; i++) {
    if (users[i].employeeId === val + "") {
      users.splice(i, 1);
    }
  }

  users.push(req.body);
  console.log(req.body);
  usersjson = JSON.stringify(users);
  fs.writeFileSync("cdw_ace23_buddies.json", usersjson, "utf-8");
};
module.exports = update;
