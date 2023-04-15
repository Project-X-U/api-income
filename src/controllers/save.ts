import {Request, Response} from 'express';
import {saveEquipment} from '../services/equipment';

const saveEquipmentCtrl = async ({body}: Request, res: Response) => {
    try {
        const response = await saveEquipment(body);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

export {saveEquipmentCtrl};
