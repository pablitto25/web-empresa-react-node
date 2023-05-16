import express from 'express';
import { getNavbarByLanguageEs } from '../controllers/LangController.js';
import { getNavbarByLanguageEn} from '../controllers/LangController.js';




const router = express.Router();

router.get('/:count_name/:cont_lang/:cont_type', getNavbarByLanguageEs);



export default router;
