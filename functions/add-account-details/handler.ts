/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const AddAccount = require('../../src/controllers/add-account/index');

module.exports = function (req: any, res: any, _next: any) {
  return AddAccount(req, res);
};
