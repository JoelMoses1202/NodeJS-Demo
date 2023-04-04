/*Require readFile,writeFile,logger and response*/
let readFile = require("../utils/fileRead");
let writeFile = require("../utils/fileWrite");
const logger = require("../logger");
let responseMsg = require("../utils/response");
let constant= require("../utils/constant");
/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object.
 * @param {object} res - The response object. Responds the data is added  or not.
 */
const add = (req, res) => {
  
  try {
    let users = readFile.fileRead();
    users.push(req.body);
    console.log(req.body);
    writeFile.fileWrite(users);
    
    res.send(responseMsg(constant.SUCCESS, constant.DATA_ADDED, 200));
    console.log(constant.SUCCESS);
  } catch (err) {
    logger.error(
      `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
        req.originalUrl
      } - ${req.method} - ${req.ip}`
    );
  
    res.send(responseMsg(constant.ERROR, constant.FILE_NOT_FOUND, 500));
  }
};
module.exports = add;
