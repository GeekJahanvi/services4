/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const UpdateOtp = require('../../src/controllers/update-otp');

module.exports = function (req: any, res: any, next: any) {
  return UpdateOtp(req, res);
};
