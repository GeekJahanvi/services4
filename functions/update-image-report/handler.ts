/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const UpdateImageReport = require('../../src/controllers/update-image-report');

module.exports = function (req: any, res: any, next: any) {
    return UpdateImageReport(req, res);
};
