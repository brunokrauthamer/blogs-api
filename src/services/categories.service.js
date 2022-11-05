const { Category } = require('../models');

const createCategory = async (category) => {
  const newCategory = await Category.create(category);
  return newCategory.dataValues;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  const formatedCategories = allCategories.map((cat) => cat.dataValues);
  return formatedCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
};
