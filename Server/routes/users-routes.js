const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controllers');


// ADD USER - post user
router.post('/addUser', userController.addUser);
router.get('/', userController.getAllUser)
router.get('/:id', userController.getUser)
router.delete('/deleteUser/:id', userController.deleteUser);


module.exports = router;