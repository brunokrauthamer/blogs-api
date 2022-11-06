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

router.get('/:id',
authMiddleware.validateToken,
postMiddleware.checkPostId,
postController.getPostById);

router.put('/:id',
authMiddleware.validateToken,
postMiddleware.validateUser,
postMiddleware.verifyEditPostBody,
postController.editPost);

module.exports = router;