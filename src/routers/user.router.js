const express = require('express');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', userController.addUser);

router.get('/', authMiddleware.validateToken, userController.getAllUsers);

router.get('/:id', authMiddleware.validateToken, userController.getOneUser);

module.exports = router;