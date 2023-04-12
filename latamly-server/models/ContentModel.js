import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const ContentModel = db.define('lg_contents', {
    cont_author: {type: DataTypes.STRING},
    cont_name: {type: DataTypes.STRING},
    cont_languaje: {type: DataTypes.STRING},
    cont_text: {type: DataTypes.STRING},
    cont_json: {type: DataTypes.STRING},
    cont_status: {type: DataTypes.STRING},
    cont_type: {type: DataTypes.STRING},
});


export default ContentModel;