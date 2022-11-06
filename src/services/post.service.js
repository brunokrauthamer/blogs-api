const { BlogPost, PostCategory } = require('../models');

const addPost = async (post, userId) => {
  const { title, content, categoryIds } = post;
  const response = await BlogPost.create({ title, content, userId });
  const newPost = response.dataValues;
  categoryIds.forEach(async (id) => {
    await PostCategory.create({ postId: newPost.id, categoryId: id });
  });
  return newPost;
};

module.exports = {
  addPost,
};
