require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const bodyParser = require('body-parser');
const path=require("path");
const http=require("http");

const app = express();

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist/Angular-Task')));
app.use('/', express.static(path.join(__dirname, 'dist/Angular-Task')));

app.use('/users', require('./routes/users-routes'));

// app.use('/api/productDetail', require('./routes/product-details/product-details-route'));
// app.use('/api/ruleSet', require('./routes/rule-set/rule-set-route'));

var server = http.createServer(app);

server.listen(3001, function () {
    console.log(`server started at ${3001}`);
})
// app.listen(3001, () => {
//     sequelize.sync()

//     console.log("Server listening at port 3001");
// })

