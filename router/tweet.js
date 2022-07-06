import express from 'express';
import * as tweetController from '../controller/tweet.js';
import 'express-async-errors';
const route = express.Router();
route.use(express.json());

route.get('/', tweetController.getTweets);

route.get('/:id', tweetController.getTweet);

route.post('/:id', tweetController.createTweet);

route.put('/:id', tweetController.updateTweet);

route.delete('/:id', tweetController.deleteTweet);

export default route;
