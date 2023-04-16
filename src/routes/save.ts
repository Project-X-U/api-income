import { Router } from "express";
import { saveEquipmentCtrl } from "../controllers/save";
const router = Router();

router.post("/", saveEquipmentCtrl);

export { router };
