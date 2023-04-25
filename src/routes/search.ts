import { Router } from "express";
import { searchByIdentificationCtrl } from "../controllers/search-user";
const router = Router();

router.get('/:id',searchByIdentificationCtrl);
export { router };