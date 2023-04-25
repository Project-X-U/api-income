import { Router } from "express";
import { userCtrl } from "../controllers/save-user";

const router = Router();

router.post("/saveUser", userCtrl);

export { router };
