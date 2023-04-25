import { Router } from "express";
import { registrationEquipmentCtrl } from "../controllers/registration-equipment";

const router = Router();

router.post("/", registrationEquipmentCtrl);

export { router };
