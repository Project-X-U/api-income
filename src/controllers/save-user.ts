import { Request, Response } from "express";
import { saveUser } from "../services/user";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const saveUserCtrl = async ({ body }: Request, res: Response) => {
  try {
    const save = await saveUser(body);

    if (!save) {
      return handleHttp(res, 400, responseApi.user.errorSave);
    }

    return handleHttp(res, 201, responseApi.user.successSave);
  } catch (e) {
    console.log("Error userCtrl", e);
    return handleHttp(res, 500, responseApi.general.serverError);
  }
};
export { saveUserCtrl };
