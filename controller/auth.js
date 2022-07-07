import express from 'express';
import 'express-async-errors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../data/auth.js';
const route = express.Router();
route.use(express.json());

//TODO Make it secure
const secretkey = '&E)H@McQfTjWnZr4u7x!';
const expireDate = '2d';
const saltRounds = 10;

export async function signup(req, res, err) {
  const { username, password, name, email, url } = req.body;
  const user = await userRepository.findByUserName(username);
  if (user) {
    return res.status(409).json({ msg: `username ${username} exists` });
  }
  const hashed = await bcrypt.hash(password, saltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function signin(req, res, err) {
  const { username, password } = req.body;
  const found = await userRepository.findByUserName(username);
  if (!found) {
    res.status(401).json({ message: `Invalid id or password` });
  }
  const isPw = await bcrypt.compare(password, found.password);
  if (!isPw) {
    res.status(401).json({ message: `Invalid id or password` });
  }
  const token = createJwtToken(found.id);
  res.status(201).json({ token, username });
}

export async function me(req, res, err) {
  const user = await userRepository.findByID(req.userid);
  if (!user) {
    return res.status(404).json({ message: 'Usernot found' });
  }
  res.status(200).json({ token: req.token, username: user.username });
}

function createJwtToken(userid) {
  return jwt.sign({ userid }, secretkey, { expiresIn: expireDate });
}
