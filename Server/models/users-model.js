const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    surname: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    skills: {
        type: Sequelize.TEXT
    },
    gender: {
        type: Sequelize.TEXT
    },
    city: {
        type: Sequelize.TEXT
    },
    profile: {
        type: Sequelize.TEXT
    }
}, {
        freezeTableName: true,
        tableName: 'user'
    });

// module.exports = {
//     User: User
// };
module.exports = User