const services = require('../services');

const { userService } = services;

const addUser = async (req, res) => {
  const { type, message } = await userService.addUser(req.body);
  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(201).json({ token: message });
};

module.exports = {
  addUser,
};
