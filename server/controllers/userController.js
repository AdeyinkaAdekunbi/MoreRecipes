import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/models/index';
const User = require('../database/models').User;

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
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }

  /**
   * Signs up a user
   * @param {*} req
   * @param {*} res
   * @returns {*} res
   */
  static signin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    return db.User.findOne({ where: { email } }).then((user) => {
      if (!user) {
        return res.status(400).json('User with email not found.');
      }
      if (bcrypt.compareSync(password, user.password)) {
        jwt.sign({ user: user.get() }, 'adekunbi', (error, token) => {
          if (error) { return res.status(400).json('Error signing token'); }
          return res.json({ token });
        });
      } else {
        return res.json({ message: 'Password is wrong' });
      }
    })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }
}
