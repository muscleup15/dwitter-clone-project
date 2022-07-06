import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js';
import { validate } from '../middleware/validator.js';
const route = express.Router();
route.use(express.json());

route.get('/', tweetController.getTweets);

route.get('/:id', tweetController.getTweet);

route.post(
  '/:id',
  body('text').trim().isLength({ min: 3 }),
  validate,
  tweetController.createTweet
);

route.put('/:id', tweetController.updateTweet);

route.delete('/:id', tweetController.deleteTweet);

export default route;
