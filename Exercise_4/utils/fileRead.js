/* Reuire fs module*/
let fs = require("fs");

/**
 * This function handles fileRead operation by parsing JSON objects.
 * @return {array} users - It returns array of objects.
 */
const fileRead = () => {
  let usersjson = fs.readFileSync("cdw_ace23_buddies.json", "utf-8");
  let users = JSON.parse(usersjson);
  return users;
};

module.exports = { fileRead };
