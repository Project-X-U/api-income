import express  from "express";

const router = express.Router();

router.post('/', (req, res) =>{
    const {name,lastName,serial,place} = req.body;

    const newRecord = 
});

export default router;