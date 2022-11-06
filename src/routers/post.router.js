const express = require('express');
const postController = require('../controller/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const postMiddleware = require('../middlewares/post.middleware');

const router = express.Router();

router.post('/',
authMiddleware.validateToken,
postMiddleware.validatePostBody,
postMiddleware.validateCategoriesExists,
postController.addPost);

router.get('/', authMiddleware.validateToken, postController.getAllPosts);

module.exports = router;