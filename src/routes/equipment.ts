import { Router } from "express";
import { saveEquipmentCtrl, getEquipmentCtrl } from "../controllers/equipment";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/:id", checkJwt, getEquipmentCtrl);
router.post("/", checkJwt, saveEquipmentCtrl);

export { router };
