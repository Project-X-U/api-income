import { Request, Response } from "express";
import { handleHttp } from "../utils/response.handle";
import responseApi from "../lang/response-api";
import { saveEquipment } from "../services/equipment";

const saveEquipmentCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await saveEquipment(body);
    res.send(response);
  } catch (e) {
    // return handleHttp()
  }
};
export { saveEquipmentCtrl };
