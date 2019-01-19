const Sequelize = require('sequelize');

var sequelize = new Sequelize("angulardb","root", "", {
    host: "localhost",
    dialect: 'mysql',
    operatorsAliases: false,
    //insecureAuth:true,  //allow connectikon to http  
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});


module.exports = sequelize;