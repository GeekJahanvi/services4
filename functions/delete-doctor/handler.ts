/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const DeleteDoctor = require('../../src/controllers/delete-doctor');

module.exports = function (req: any, res: any, next: any) {
  return DeleteDoctor(req, res);
};
