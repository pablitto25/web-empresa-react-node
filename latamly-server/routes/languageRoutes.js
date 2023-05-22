import express from 'express';
import { getNavbarByLanguage} from '../controllers/LangController.js';




const router = express.Router();

router.get('/:name/:lang', getNavbarByLanguage);



export default router;
