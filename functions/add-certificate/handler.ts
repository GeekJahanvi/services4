/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const AddCertificate = require('../../src/controllers/add-certificate');

module.exports = function (req: any, res: any, next: any) {
  return AddCertificate(req, res);
};
