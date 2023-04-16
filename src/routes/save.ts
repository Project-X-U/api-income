import { Router } from "express";
import { saveEquipmentCtrl,registrationEquipmentCtrl,userCtrl } from "../controllers/save";
const router = Router();

router.post("/", saveEquipmentCtrl);
router.post("/", registrationEquipmentCtrl);
router.post("/", userCtrl);

export { router };
