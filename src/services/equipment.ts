import { SaveRegistrationEquipment } from "../interface/equipment";
import RegistrationEquipmentModel from "../models/equiment";

const saveEquipment = async (item: SaveRegistrationEquipment) => {
  try {
    const responseRegis = await RegistrationEquipmentModel.create(item);
    return responseRegis;
  } catch (e) {
    console.log(e);
    throw new Error("Error registrationEquipment");
  }
};

export { saveEquipment };
