/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const AddMessages = require('../../src/controllers/add-messages');

module.exports = function (req: any, res: any, next: any) {
  return AddMessages(req, res);
};
