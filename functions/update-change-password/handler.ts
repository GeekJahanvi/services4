/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const UpdateChangePassword = require('../../src/controllers/update-change-password');

module.exports = function (req: any, res: any, next: any) {
    return UpdateChangePassword(req, res);
};
