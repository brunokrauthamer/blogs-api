const services = require('../services');

const { categoriesService } = services;

const createCategory = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await categoriesService.createCategory(req.body);
  console.log(category);
  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoriesService.getAllCategories();
  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};