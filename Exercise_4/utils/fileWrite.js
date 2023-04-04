/* Reuire fs module*/
let fs = require("fs");

/**
 * This function handles fileWrite operation by stringifying array.
 * @param {array} users - The array users is the array of objects.
 */
const fileWrite = (users) => {
  let usersjson = JSON.stringify(users);
  fs.writeFileSync("./cdw_ace23_buddies.json", usersjson, "utf-8");
};

module.exports = { fileWrite };
