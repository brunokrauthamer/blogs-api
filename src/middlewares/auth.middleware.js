const services = require('../services');

const authService = services.loginService;

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const { type, message } = authService.validateToken(authorization);
  // console.log('vali tokeeeen', validToken);
  if (type) return res.status(type).json({ message });
  next();
};  

module.exports = { validateToken };
