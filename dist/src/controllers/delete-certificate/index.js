"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const mutations_1 = __importDefault(require("../../graphql/medical_history/mutations"));
const commons_1 = __importDefault(require("../../commons"));
const cloudinary_1 = __importDefault(require("../../../helpers/cloudinary"));
function deleteCertificate(certificate_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, error } = yield commons_1.default.createAction({
            certificate_id: certificate_id
        }, mutations_1.default.DELETE_CERTIFICATE, 'delete_certificates');
        return { deletedData: data, deletedError: error };
    });
}
const DeleteCertificate = {
    handle(req, res) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { certificate_id } = (_e = (_c = (_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.input) !== null && _c !== void 0 ? _c : (_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.input) !== null && _e !== void 0 ? _e : req === null || req === void 0 ? void 0 : req.body;
                const { deletedData, deletedError } = yield deleteCertificate(certificate_id);
                if (deletedError) {
                    return res.status(400).json({ status: false, message: deletedError });
                }
                if (deletedData.returning[0].certificate_public_id) {
                    yield cloudinary_1.default.cloudinaryDelete(deletedData.returning[0].certificate_public_id);
                }
                return res.status(200).json({ status: true, message: 'certificate report deleted', data: deletedData.returning[0] });
            }
            catch (e) {
                return res.status(500).json({ status: false, message: 'Something went wrong.' });
            }
        });
    }
};
module.exports = DeleteCertificate.handle;
//# sourceMappingURL=index.js.map