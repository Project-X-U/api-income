"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.responseError = exports.responseCorrect = void 0;
const responseCorrect = (apiResponse) => {
    const defaultResponse = {
        code: 100,
        statusCode: 200,
        message: "",
    };
    return Object.assign(Object.assign({}, defaultResponse), apiResponse);
};
exports.responseCorrect = responseCorrect;
const responseError = (apiResponse) => {
    const defaultReponse = {
        code: 102,
        statusCode: 500,
        message: "",
    };
    return Object.assign(Object.assign({}, defaultReponse), apiResponse);
};
exports.responseError = responseError;
const response = (apiResponse, res) => {
    const resultHttp = Object.assign({}, apiResponse);
    delete resultHttp.statusCode;
    if (apiResponse.statusCode !== undefined) {
        return res.status(apiResponse.statusCode).json(resultHttp);
    }
    else {
        console.log("La propiedad statusCode no esta definida");
    }
};
exports.response = response;
