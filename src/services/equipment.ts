import { Equipment } from "../interface/equipment";
import EquipmentModel from "../models/equiment";

const saveEquipment = async (item: Equipment) => {
  try {
    const responseRegis = await EquipmentModel.create(item);
    return responseRegis;
  } catch (e) {
    console.log(e);
    throw new Error("Error saveEquipment");
  }
};

const getEquipment = async (id: string) => {
  try {
    const responseItem = await EquipmentModel.find({ user_id: id });
    return responseItem;
  } catch (e) {
    console.log(e);
    throw new Error("Error getEquipment");
  }
};

export { saveEquipment, getEquipment };
