
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getAllUsers);


router.get('/user/:id', userController.getUserById);


router.post('/createuser', userController.createUser);

module.exports = router;
