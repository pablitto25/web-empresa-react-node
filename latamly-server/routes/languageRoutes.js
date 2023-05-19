import express from 'express';
import { getNavbarByLanguage} from '../controllers/LangController.js';




const router = express.Router();

router.get('/:lang', getNavbarByLanguage);



export default router;
