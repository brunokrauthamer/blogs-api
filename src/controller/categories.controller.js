const services = require('../services');

const { categoriesService } = services;

const createCategory = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await categoriesService.createCategory(req.body);
  return res.status(201).json(category);
};

module.exports = {
  createCategory,
};