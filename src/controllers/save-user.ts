import { Request, Response } from "express";
import { saveUser } from "../services/user";
import { response, responseError } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const userCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await saveUser(body);
    res.send(response);
  } catch (e) {
    return response(
      responseError({
        statusCode: 500,
        message: responseApi.general.serverError,
        data: e,
      }),
      res
    );
  }
};
export { userCtrl };
