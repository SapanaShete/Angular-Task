const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Skill = sequelize.define('skill', {
   
    name: {
        type: Sequelize.TEXT
    },
   
}, {
        freezeTableName: true,
        tableName: 'skill'
    });

// module.exports = {
//     User: User
// };
module.exports = Skill