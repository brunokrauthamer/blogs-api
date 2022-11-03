const services = require('../services');

const { loginService } = services;

const login = async (req, res) => {
  const validBodyFormat = await loginService.validateBody(req.body);
  if (!validBodyFormat) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const { type, message } = await loginService.validateLogin(req.body);
  if (type) {
    return res.status(400).json({ message });
  }
  return res.status(200).json({ token: message });
};

module.exports = {
  login,
};
