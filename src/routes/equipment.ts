import { Router } from "express";
import { saveEquipmentCtrl } from "../controllers/equipment";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, saveEquipmentCtrl);

export { router };
