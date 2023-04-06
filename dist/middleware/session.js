"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const response_handle_1 = require("../utils/response.handle");
const response_api_1 = __importDefault(require("../lang/response-api"));
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            return (0, response_handle_1.response)((0, response_handle_1.responseError)({
                statusCode: 401,
                message: "",
            }), res);
        }
        else {
            req.user = isUser;
            next();
        }
    }
    catch (e) {
        return (0, response_handle_1.response)((0, response_handle_1.responseError)({
            statusCode: 500,
            message: response_api_1.default.general.serverError,
            data: e,
        }), res);
    }
};
exports.checkJwt = checkJwt;
