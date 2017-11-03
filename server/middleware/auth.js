import jwt from 'jsonwebtoken';

export default (req, res, next) => {
<<<<<<< HEAD
  const token = req.body.token;
=======
  const token = req.get('Authorization');
>>>>>>> ed1b77d63c2e3e7bb64089e75881d8a2d3c1e74d

  jwt.verify(token, 'adekunbi', (error, data) => {
    if (error) {
      return res.status(401).json({ message: 'You are not authenticated' });
    }
    req.AuthUser = data.user;
    next();
  });
};
