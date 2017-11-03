import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.get('Authorization');

  jwt.verify(token, 'adekunbi', (error, data) => {
    if (error) {
      return res.status(401).json({ message: 'You are not authenticated' });
    }
    req.AuthUser = data.user;
    next();
  });
};
