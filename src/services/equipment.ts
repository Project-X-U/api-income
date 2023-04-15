import {SaveEquipments} from '../interface/save-equipment'
import EquipmentModel from '../models/equipment';

const saveEquipment = async (item: SaveEquipments) => {
    const responseEqui = await EquipmentModel.create(item);
    return responseEqui;
}

export {saveEquipment};