import { Request, Response } from "express";
import { saveEquipment } from "../services/equipment";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const saveEquipmentCtrl = async ({ body }: Request, res: Response) => {
  try {
    const save = await saveEquipment(body);
    if (!save) {
      return handleHttp(res, 400, responseApi.user.errorSave);
    }

    return handleHttp(res, 201, responseApi.user.successSave);
  } catch (e) {
    console.log("Error EquipmentCtrl", e);
    return handleHttp(res, 500, responseApi.general.serverError);
  }
};

export { saveEquipmentCtrl };
