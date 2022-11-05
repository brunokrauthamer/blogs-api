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

const getOneUser = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getOneUser(id);
  if (type) {
    return res.status(type).json({ message });
  }
  res.status(200).json(message);
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
};
