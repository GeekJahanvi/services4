/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const Signup = require('../../src/controllers/signup');

module.exports = function (req: any, res: any, next: any) {
  return Signup(req, res);
};
