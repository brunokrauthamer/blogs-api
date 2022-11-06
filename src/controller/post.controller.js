const services = require('../services');

const { postService } = services;

const addPost = async (req, res) => {
  const newPost = await postService.addPost(req.body, req.user.id);
  res.status(201).json(newPost);
};

module.exports = {
  addPost,
};
