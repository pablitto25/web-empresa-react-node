import express from 'express';
import { getAllHubs } from '../controllers/HubsControllers.js';


const router = express.Router();

router.get('/', getAllHubs);

export default router;
