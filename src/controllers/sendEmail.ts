import { Request, Response } from "express";
import { sendEmail } from "../services/sendEmail";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const sendEmailCtrl = async ({ body }: Request, res: Response) => {
  try {
    await sendEmail(body);

    return handleHttp(res, 200, responseApi.email.success);
  } catch (e) {
    console.log("Error sendEmailCtrl", e);
    return handleHttp(res, 500, responseApi.general.serverError);
  }
};

export { sendEmailCtrl };
