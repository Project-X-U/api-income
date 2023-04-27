import { Request, Response } from "express";
import { saveEquipment, getEquipment } from "../services/equipment";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";

const saveEquipmentCtrl = async ({ body }: Request, res: Response) => {
  try {
    const save = await saveEquipment(body);
    if (!save) {
      return handleHttp(res, 400, responseApi.equipment.errorSave);
    }

    return handleHttp(res, 201, responseApi.equipment.successSave);
  } catch (e) {
    console.log("Error saveEquipmentCtrl", e);
    return handleHttp(res, 500, responseApi.general.serverError);
  }
};

const getEquipmentCtrl = async ({ params }: Request, res: Response) => {
  try {
    const id = params;
    const data = await getEquipment(String(id));
    console.log(data);
    if (!data || data.length === 0) {
      return handleHttp(res, 400, responseApi.equipment.errorList);
    }

    return handleHttp(res, 201, responseApi.equipment.successList, data);
  } catch (e) {
    console.log("Error getEquipmentCtrl", e);
    return handleHttp(res, 500, responseApi.general.serverError);
  }
};

export { saveEquipmentCtrl, getEquipmentCtrl };
