/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const UpdateMedicalSchool = require('../../src/controllers/update-medical-school');

module.exports = function (req: any, res: any, next: any) {
  return UpdateMedicalSchool(req, res);
};
