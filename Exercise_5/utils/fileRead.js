/* Reuire fs module*/
let fs = require("fs");
const logger = require("../logger");
let responseMsg = require("./response");
let constant= require("./constant");
/**

/**
 * This function handles fileRead operation by parsing JSON objects.
 * @return {array} users - It returns array of objects.
 */

const fileRead = (req,res) => {
  try{
    let usersjson = fs.readFileSync("cdw_ace23_buddies.json", "utf-8");
    let users = JSON.parse(usersjson);
    return users;
  }
  catch(err){
    logger.error(
      `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
        req.originalUrl
      } - ${req.method} - ${req.ip}`
    );
    res.send(responseMsg(constant.ERROR, constant.FILE_NOT_FOUND, 500));
    process.exit();

  }
  
};


module.exports = { fileRead };



