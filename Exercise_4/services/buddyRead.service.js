/*Require fileRead,logger and response*/
let readFile = require("../utils/fileRead");
const logger = require("../logger");
let responseMsg = require("../utils/response");
let constant= require("../utils/constant");

/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object.
 * @param {object} res - The response object. Responds the data is displayed  or not.
 */
const displayAll = (req, res) => {
  try {
    users = readFile.fileRead();
    console.log(users);
    res.send(responseMsg(constant.SUCCESS, constant.DATA_DISPLAYED, 200));
    return;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
        req.originalUrl
      } - ${req.method} - ${req.ip}`
    );
  }
  res.send(responseMsg(constant.ERROR, constant.FILE_NOT_FOUND, 500));
};

/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object.Request employee id to be displayed.
 * @param {object} res - The response object. Responds the data is displayed  or not.
 */
const displayOne = (req, res) => {
  try {
    let val = req.params["id"];
    let users = readFile.fileRead();
    for (i = 0; i < users.length; i++) {
      if (users[i].employeeId === val + "") {
        res.send(responseMsg(constant.SUCCESS, constant.DATA_DISPLAYED, 200));
        console.log(users[i]);
        break;
      }
    }
    return;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
        req.originalUrl
      } - ${req.method} - ${req.ip}`
    );
    res.send(responseMsg(constant.ERROR, constant.FILE_NOT_FOUND, 200));

  }
};

module.exports = { displayAll, displayOne };
