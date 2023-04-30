import { Router } from "express";
import { searchByIdentificationCtrl } from "../controllers/search-user";
const router = Router();

router.post("/", searchByIdentificationCtrl);

export { router };
