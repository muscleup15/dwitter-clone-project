import express from 'express';
import * as tweetController from '../controller/tweet.js';
const route = express.Router();
route.use(express.json());

route.get('/', tweetController.getAllTweets);

route.get('/:id', tweetController.getTweetById);

route.post('/:id', tweetController.createTweet);

route.put('/:id', tweetController.updateTweet);

route.delete('/:id', tweetController.deleteTweet);

export default route;
