const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const City = sequelize.define('city', {
   
    name: {
        type: Sequelize.TEXT
    },
   
}, {
        freezeTableName: true,
        tableName: 'city'
    });

// module.exports = {
//     User: User
// };
module.exports = City