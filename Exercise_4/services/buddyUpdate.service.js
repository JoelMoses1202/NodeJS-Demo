/*Require Read and write services and logger*/
let readFile = require("../utils/fileRead");
let writeFile = require("../utils/fileWrite");
const logger = require("../logger");
let responseMsg = require("../utils/response");
let constant= require("../utils/constant");

/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object. Request employee id to update data.
 * @param {object} res - The response object. Responds the data is updated  or not.
 */
const update = (req, res) => {
  try {
    let val = req.body.employeeId;
    let users = readFile.fileRead();
    for (i = 0; i < users.length; i++) {
      if (users[i].employeeId === val + "") {
        users[i].nickName = req.body.nickName + "";
        users[i].dob = req.body.dob + "";
        users[i].hobbies = req.body.hobbies + "";
        console.log(req.body);
        writeFile.fileWrite(users);
        res.send(responseMsg(constant.SUCCESS, constant.DATA_UPDATED, 200));
        break;
      }
    }
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
        req.originalUrl
      } - ${req.method} - ${req.ip}`
    );
    res.send(responseMsg(constant.ERROR, constant.FILE_NOT_FOUND, 500));
  }
};
module.exports = update;
