const services = require('../services');

const { postService } = services;

const addPost = async (req, res) => {
  const newPost = await postService.addPost(req.body, req.user.id);
  res.status(201).json(newPost);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await postService.getAllPosts();
  // console.log(allPosts);
  res.status(200).json(allPosts);
};

module.exports = {
  addPost,
  getAllPosts,
};
