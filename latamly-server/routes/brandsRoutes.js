import express from 'express';
import { getBrandsByLanguaje } from '../controllers/BrandsControllers.js';



const router = express.Router();

router.get('/:lg', getBrandsByLanguaje);

export default router;
