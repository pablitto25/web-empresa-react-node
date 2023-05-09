import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const OurteamModel = db.define('lg_ourteam', {
    ourteam_img_url: {type: DataTypes.STRING},
    ourteam_type: {type: DataTypes.STRING},
    area: {type: DataTypes.STRING},
    ourteam_fullname: {type: DataTypes.STRING},
    ourteam_postEn: {type: DataTypes.STRING},
    ourteam_postEs: {type: DataTypes.STRING},
    ourteam_mail: {type: DataTypes.STRING},
    ourteam_linkedinUrl: {type: DataTypes.STRING},
    ourteam_status: {type: DataTypes.STRING},

});


export default OurteamModel;