const services = require('../services');

const { userService } = services;

const addUser = async (req, res) => {
  const { type, message } = await userService.addUser(req.body);
  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(201).json({ token: message });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

module.exports = {
  addUser,
  getAllUsers,
};
