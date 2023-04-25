import { Router } from "express";
import { saveEquipmentCtrl } from "../controllers/save-equipment";

const router = Router();

router.post("/", saveEquipmentCtrl);

export { router };
