import { Router } from "express";
import { saveUserCtrl } from "../controllers/save-user";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, saveUserCtrl);

export { router };
