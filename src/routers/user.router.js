const express = require('express');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', userController.addUser);

router.get('/', authMiddleware.validateToken, userController.getAllUsers);

module.exports = router;