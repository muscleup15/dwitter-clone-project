import express from 'express';
import { users } from '../data/auth.js';
import 'express-async-errors';
import jwt from 'jsonwebtoken';
const route = express.Router();
route.use(express.json());

const secretkey = '&E)H@McQfTjWnZr4u7x!A%C*F-JaNdRg';
const expireDate = '2d';

route.post('/signin', (req, res, err) => {
  const { username, password } = req.body;
  const isUserName = users.find((user) => user.username == username);
  const isPw = users.find((user) => user.password == password);
  if (isUserName == false) {
    res.status(404).json({ message: `Invalid id or password` });
  }
  if (isPw == false) {
    res.status(404).json({ message: `Invalid id or password` });
  }
  const token = jwt.sign(req.body, secretkey, { expiresIn: expireDate });
  res.status(200).json(token);
});

route.post('/signup', (req, res, err) => {
  const { username, password, name, email, url } = req.body;
  const user = {
    id: Date.now().toString(),
    username,
    password,
    name,
    email,
    url,
  };
  users.unshift(user);
  res.status(201).json(users);
});
route.get('/me', (req, res, err) => {
  res.sendStatus(200);
});
export default route;
