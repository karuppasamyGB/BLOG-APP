const jwt = require('jsonwebtoken');
const createSecretToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { createSecretToken };
