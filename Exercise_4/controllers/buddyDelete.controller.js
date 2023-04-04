/*Require fileRead,logger and response*/
let readFile = require("../utils/fileRead");
let responseMsg = require("../utils/response");
const logger = require("../logger");
let addControll = require("../services/buddyDelete.service");
let constant=require("../utils/constant");

/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object. Request employee id to validate data.
 * @param {object} res - The response object. Responds the the validation error object.
 */
const deleteBuddy = (req, res) => {
  let flag = 0;
  let val = req.body.employeeId;
  let users = readFile.fileRead();
  for (i = 0; i < users.length; i++) {
    if (users[i].employeeId === val + "") {
      flag = 1;
    }
  }
  if (flag == 0) {
    res.send(responseMsg(constant.ERROR,constant.NOT_VALID_EMPLOYEE_ID, 404));
  } else {
    addControll(req, res);
  }
};
module.exports = deleteBuddy;
 