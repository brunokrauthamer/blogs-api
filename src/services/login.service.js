// const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

// validate body 53 min da aula

const validateBody = ({ email, password }) => email && password;

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  // console.log(user);
  if (!user || user.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }
  
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return { type: null, message: token };
};

const validateToken = (token) => {
  const { validated } = jwtUtil.validateToken(token);
  if (validated) {
    return { type: null };
  }
  return { type: 401, message: 'Expired or invalid token' };
};

module.exports = {
  validateBody,
  validateLogin,
  validateToken,
};
