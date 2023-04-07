/*Require Read and write services and logger*/
let readFile = require("../utils/fileRead");
let writeFile = require("../utils/fileWrite");
const logger = require("../logger");
let responseMsg = require("../utils/response");
let constant = require("../utils/constant");

/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object. Request the employee id from body.
 * @param {object} res - The response object. Responds the data is deleted or not.
 */
const delet = (req, res) => {
  try {
    let val = req.body.employeeId;
    let users = readFile.fileRead();
    users = users.filter((item) => item.employeeId !== val + "");
    writeFile.fileWrite(users);
    let response = responseMsg(constant.SUCCESS, constant.DATA_DELETED, 200);
    res.send({response,status : req.body});
   
    return;
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
        req.originalUrl
      } - ${req.method} - ${req.ip}`
    );
    res.send(responseMsg(constant.ERROR, constant.FILE_NOT_FOUND, 500));
    FILE_NOT_FOUND;
  }
};
module.exports = delet;
