import { Request, Response } from "express";
import { saveEquipment } from "../services/equipment";
import { registrationEquipment } from "../services/registration-equiment";
import { saveUser } from "../services/user";
import { response, responseError } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const saveEquipmentCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await saveEquipment(body);
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
export { saveEquipmentCtrl,registrationEquipmentCtrl,userCtrl };
