import { Router } from "express";
import { sendEmailCtrl } from "../controllers/sendEmail";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, sendEmailCtrl);

export { router };
