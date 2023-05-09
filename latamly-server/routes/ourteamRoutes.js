import express from 'express';
import { getAllByType, getAllByArea } from '../controllers/OurteamControllers.js';



const router = express.Router();

router.get('/:type', getAllByType);
router.get('/:type/:area', getAllByArea);


export default router;
