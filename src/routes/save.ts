import express  from "express";
import {saveEquipmentCtrl} from '../controllers/save';
const router = express.Router();

router.post('/', saveEquipmentCtrl);

export default router;