/*Require readFile,writeFile,logger and response*/
let readFile = require("../utils/fileRead");
let writeFile = require("../utils/fileWrite");
const logger = require("../logger");
let responseMsg = require("../utils/response");
let constant = require("../utils/constant");
/**
 * This function handles an HTTP request and sends a response.
 * @param {object} req - The request object.
 * @param {object} res - The response object. Responds the data is added  or not.
 */
const add = (req, res) => {
  let users = readFile.fileRead(req, res);
  users.push(req.body);
  writeFile.fileWrite(users);
  let response = responseMsg(constant.SUCCESS, constant.DATA_ADDED, 200);
  res.send({response,status : req.body});
 
};
module.exports = add;
