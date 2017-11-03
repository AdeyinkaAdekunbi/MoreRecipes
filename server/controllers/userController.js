import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/models/index';

/**
 *
 */
export default class userController {
  /**
   * Signs up a user
   * @param {*} req
   * @param {*} res
   * @returns {*} res
   */
  static signup(req, res) {
    return db.User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    }).then(user => res.status(201).send({
      id: user.id,
      url: `${req.protocol}://${req.headers.host}/api/v1/users/${user.id}`
    })).catch(error => res.status(400).send({
      message: error.errors[0].message // return the description of the first error object
    }));
  }

  /**
   * Signs in a user
   * @param {*} req
   * @param {*} res
   * @returns {*} res
   */
  static signin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    return db.User.findOne({ where: { email } }).then((user) => {
      if (!user) {
        return res.status(400).json({ message: 'User with email not found.' });
      }
      if (bcrypt.compareSync(password, user.password)) {
        jwt.sign({ user: user.get() }, 'adekunbi', (error, token) => {
          if (error) { return res.status(400).json('Error signing token'); }
          return res.json({ token });
        });
      } else {
        return res.status(401).json({ message: 'Password is wrong' });
      }
    }).catch(error => res.status(500).json(error));
  }
}
