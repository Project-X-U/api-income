import { Request, Response } from "express";
import { registrationEquipment } from "../services/registration-equiment";
import { response, responseError } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const registrationEquipmentCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await registrationEquipment(body);
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


export { registrationEquipmentCtrl };
