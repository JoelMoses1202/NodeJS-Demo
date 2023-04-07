/**
 * This function gets status,data and code put it in an object return it.
 * @param {string} status - The string object status is added to object.
 * @param {string} data - The string object data is added to object.
 * @param {number} code - The number object code is added to object.
 * @return {object} response_obj - The object response_obj is returned in function.
 */
const responseMessage = (status, data, code) => {
  var response_obj = {
    status: status,
    data: data,
    code: code,
  };
  return response_obj;
};
module.exports = responseMessage;
