/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const AddUserEducation = require('../../src/controllers/add-user-education');

module.exports = function (req: any, res: any, next: any) {
  return AddUserEducation(req, res);
};
