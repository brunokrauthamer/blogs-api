const express = require('express');
const categoriesController = require('../controller/categories.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware.validateToken, categoriesController.createCategory);

router.get('/', authMiddleware.validateToken, categoriesController.getAllCategories);

module.exports = router;