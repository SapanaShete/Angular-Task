const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controllers');


// ADD USER - post user
router.post('/addUser', userController.addUser);


module.exports = router;