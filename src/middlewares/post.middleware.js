const { categoriesService } = require('../services');

const validatePostBody = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!(Boolean(title) && Boolean(content) && Boolean(categoryIds))) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoriesExists = async (req, res, next) => {
  const { categoryIds } = req.body;
  const currentCategories = await categoriesService.getAllCategories();
  const currentCatIds = currentCategories.map((cat) => cat.id);
  const idsExist = categoryIds.reduce((acc, id) => currentCatIds.includes(id) && acc, true);
  if (!idsExist) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = {
  validatePostBody,
  validateCategoriesExists,
};
