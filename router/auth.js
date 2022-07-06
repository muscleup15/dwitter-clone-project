import express from 'express';
import 'express-async-errors';
import * as authController from '../controller/auth.js';
const route = express.Router();
route.use(express.json());

//[...array, element1, element2] 이렇게 validateSignup 만들수 있네

route.post('/signin', authController.signin);

route.post('/signup', authController.signup);

route.get('/me', (req, res, err) => {
  res.sendStatus(200);
});
export default route;
