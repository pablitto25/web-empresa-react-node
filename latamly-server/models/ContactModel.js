import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const ContactModel = db.define('lg_contacts', {
    mail: {type: DataTypes.STRING},
    
});


export default ContactModel;