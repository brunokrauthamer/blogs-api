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

const getPostById = async (req, res) => {
  const post = await postService.getPostById(Number(req.params.id));
  res.status(200).json(post);
};

const editPost = async (req, res) => {
  const post = await postService.editPost(req.body, Number(req.params.id));
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  await postService.deletePost(Number(req.params.id));
  res.status(204).end();
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
};
