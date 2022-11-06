const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateEmail = require('../utils/validateEmail');

const invalidBodyFormat = (body) => {
  const { displayName, email, password } = body;

  if (displayName.length < 8) {
    return { type: 400, message: '"displayName" length must be at least 8 characters long' };
  }

  if (!validateEmail(email)) {
    return { type: 400, message: '"email" must be a valid email' };
  }

  if (password.length < 6) {
    return { type: 400, message: '"password" length must be at least 6 characters long' };
  }
  return false;
};

const addUser = async (body) => {
  if (invalidBodyFormat(body)) return invalidBodyFormat(body);
  const { email } = body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return { type: 409, message: 'User already registered' };
  }
  const newUser = await User.create(body);
  // console.log(newUser.dataValues);
  const { password: _, ...userWithoutPassword } = newUser.dataValues;
  const token = jwtUtil.createToken(userWithoutPassword);
  // console.log('token', token);
  return { type: null, message: token };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  const usersWithPassword = users.map((u) => u.dataValues);
  const usersWithoutPassword = usersWithPassword.map((u) => ({ ...u, password: undefined }));
  // console.log('usuarios', usersWithPassword);
  return usersWithoutPassword;
};

const getOneUser = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return { type: 404, message: 'User does not exist' };
  }
  const { password: _, ...userPublicInfo } = user.dataValues;
  return { type: null, message: userPublicInfo };
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
};