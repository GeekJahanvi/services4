/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const AddLabReport = require('../../src/controllers/add-lab-report');

module.exports = function (req: any, res: any, next: any) {
  return AddLabReport(req, res);
};
