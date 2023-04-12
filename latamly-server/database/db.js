import Sequelize from 'sequelize';

var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}


const db = new Sequelize('latamlygroup', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    /* define: {
        freezeTableName: true
    } */
});



export default db;