const jwt = require('jsonwebtoken');

const secret = 'riddleenigma';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    // console.log("token", token)

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    }
    catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ first_name, email, _id, admin }) {
    const payload = { first_name, email, _id, admin };

    return jwt.sign(
      { data: payload },
      secret,
      { expiresIn: expiration }
    );
  }
};
