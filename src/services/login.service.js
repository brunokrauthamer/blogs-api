// const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

// validate body 53 min da aula

const validateBody = ({ email, password }) => email && password;

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }
  
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return { type: null, message: token };
};

const validateToken = (token) => {
  if (!token) {
    const e = new Error('Token obrigatório!');
    e.name = 'Token obrigatório';
    throw e;
  }

  const user = jwtUtil.validateToken(token);

  return user;
};

module.exports = {
  validateBody,
  validateLogin,
  validateToken,
};
