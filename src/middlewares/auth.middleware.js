const services = require('../services');

const authService = services.loginService;

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  authService.validateToken(authorization);

  next();
};  

module.exports = { validateToken };
