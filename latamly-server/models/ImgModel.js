import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const ImgModel = db.define('lg_media', {
    media_img_url: {type: DataTypes.STRING},
    media_vid_url: {type: DataTypes.STRING},
    media_name: {type: DataTypes.STRING},
    media_alt: {type: DataTypes.STRING},
    media_type: {type: DataTypes.STRING},
});


export default ImgModel;