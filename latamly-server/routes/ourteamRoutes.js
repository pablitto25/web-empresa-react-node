import express from 'express';
import { getAllByType } from '../controllers/OurteamControllers.js';



const router = express.Router();

router.get('/:type', getAllByType);

export default router;
