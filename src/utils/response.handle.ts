import { Response } from "express";
import { ApiResponse } from "../interface/api-response";

export const responseCorrect = (apiResponse: Partial<ApiResponse>) => {
  const defaultResponse: ApiResponse = {
    code: 100,
    statusCode: 200,
    message: "",
  };
  return { ...defaultResponse, ...apiResponse };
};

export const responseError = (apiResponse: Partial<ApiResponse>) => {
  const defaultReponse: ApiResponse = {
    code: 102,
    statusCode: 500,
    message: "",
  };
  return { ...defaultReponse, ...apiResponse };
};

export const response = (apiResponse: ApiResponse, res: Response) => {
  const resultHttp = { ...apiResponse };
  delete resultHttp.statusCode;

  if (apiResponse.statusCode !== undefined) {
    return res.status(apiResponse.statusCode).json(resultHttp);
  } else {
    console.log("La propiedad statusCode no esta definida");
  }
};
