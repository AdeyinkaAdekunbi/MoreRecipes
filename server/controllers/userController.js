import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/models/index';

const User = require('../database/models').User;

export default class userController {
  signup(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(422).json('The username, email, and password are required.');
    }
    return db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    })
    .then (user => res.status(201).send(user))
    .catch (error=> res.status(400).send(error))
    }
  signin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    return db.User.findOne({ where: { email } }).then((user) => {
      if (!user) {
        return res.status(400).json('User with email not found.');
      }
      if(bcrypt.compareSync(password, user.password)) {
        jwt.sign({ id: user.id }, 'adekunbi', (error, token) => {
          if(error) { return res.status(400).json('Error signing token'); }
          return res.json({ token: token });
         });
       } else {
         return res.json({ message: 'Password is wrong' });
       }
      })
    .catch(error => {
      console.log(error);
      return res.status(500).json(error)
    });
  }
  };
