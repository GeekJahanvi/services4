/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const UpdateLabReport = require('../../src/controllers/update-lab-report');

module.exports = function (req: any, res: any, next: any) {
    return UpdateLabReport(req, res);
};
