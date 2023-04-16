import {SaveRegistrationEquipment} from '../interface/save-registration-equiment'
import RegistrationEquipmentModel from '../models/registration-equiment';

const registrationEquipment = async (item: SaveRegistrationEquipment) => {
    const responseRegis = await RegistrationEquipmentModel.create(item);
    return responseRegis;
}

export {registrationEquipment};