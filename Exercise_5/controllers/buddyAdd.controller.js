/* Require response and fileRead*/
let responseMsg = require("../utils/response");
let readFile = require("../utils/fileRead");
let addControll = require("../services/buddyAdd.service");
let constant=require("../utils/constant");
/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object. Request employee id to validate data.
 * @param {object} res - The response object. Responds the the validation error object.
 */

const addBuddy = (req, res) => {
  let flag = 0;
  let val = req.body.employeeId;
  if (isNaN(parseInt(val + ""))) {
    res.send(responseMsg(constant.ERROR, constant.NOT_VALID_EMPLOYEE_ID, 404));
  } else {
    let users = readFile.fileRead(req,res);
    for (let i = 0; i < users.length; i++) {
      if (users[i].employeeId === val + "") {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      res.send(responseMsg(constant.ERROR, constant.NOT_UNIQUE_EMPLOYEE_ID, 404));
    } else {
      addControll(req, res);
    }
  }
};
module.exports = addBuddy;
