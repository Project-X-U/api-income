import { Request, Response } from "express";
import { registrationEquipment } from "../services/registration-equiment";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const registrationEquipmentCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await registrationEquipment(body);
    res.send(response);
  } catch (e) {
    // return handleHttp()
  }
};

export { registrationEquipmentCtrl };
