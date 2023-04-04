/* Require Winston module */
const { createLogger, format, transports } = require("winston");
require('dotenv').config();



/* Format of Logger */
module.exports = createLogger({
  transports: new transports.File({
    level: process.env.LOGGER_ERROR,
    filename: "logs/error.log",
    format: format.combine(
      format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
      format.align(),
      format.printf(
        (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
      )
    ),
  }),
});
