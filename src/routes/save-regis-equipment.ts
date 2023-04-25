import { Router } from "express";
import { registrationEquipmentCtrl } from "../controllers/registration-equipment";

const router = Router();

router.post("/registration", registrationEquipmentCtrl);

export { router };
