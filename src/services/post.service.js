const { BlogPost, PostCategory, User } = require('../models');
const categoriesService = require('./categories.service');

const addPost = async (post, userId) => {
  const { title, content, categoryIds } = post;
  const response = await BlogPost.create({ title, content, userId });
  const newPost = response.dataValues;
  categoryIds.forEach(async (id) => {
    await PostCategory.create({ postId: newPost.id, categoryId: id });
  });
  return newPost;
};

const getAllPosts = async () => {
  const postsResponse = await BlogPost.findAll();
  const allPosts = postsResponse.map((response) => response.dataValues);
  // console.log(allPosts);
  const usersResponse = await User.findAll();
  const allUsers = usersResponse.map((response) => {
    const { password: _, ...user } = response.dataValues;
    return user;
  });
    // console.log(allUsers);
  const postCategoriesResponse = await PostCategory.findAll();
  const postCategories = postCategoriesResponse.map((response) => response.dataValues);
  // console.log(postCategories);
  const allCategories = await categoriesService.getAllCategories();
  // console.log(allCategories, '\n\n\n\n');
  const joinedPosts = allPosts.map((post) => {
    const user = allUsers.find((u) => u.id === post.userId);
    const postCat = postCategories.filter((postC) => postC.postId === post.id);
    const catIds = postCat.map((postC) => postC.categoryId);
    const categories = allCategories.filter((cat) => catIds.includes(cat.id));
    return { ...post, user, categories };
  });
  return joinedPosts;
};

module.exports = {
  addPost,
  getAllPosts,
};
