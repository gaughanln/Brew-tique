const jwt = require('jsonwebtoken');
require('dotenv').config({path: '../.env'});

const secret = process.env.REACT_APP_JWT_SECRET;
const expiration = '2h';

function authMiddleware({ req })  {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }
  return req;
};



function signToken ({ email, firstName, lastName, _id }) {
  const payload = { email, firstName, lastName, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = { authMiddleware, signToken };
