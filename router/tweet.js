import express from 'express';
import * as tweetRepository from '../data/tweet.js';
import 'express-async-errors';
const route = express.Router();
route.use(express.json());

route.get('/', (req, res, err) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getTweetByUsername(username)
    : tweetRepository.getAllTweets();
  console.log(data);
  res.status(200).json(data);
});

route.get('/:id', (req, res, err) => {
  const id = req.params.id;
  const data = tweetRepository.getTweetById(id);
  res.status(200).json(data);
});

route.post('/:id', (req, res, err) => {
  const { text, username } = req.body;
  const tweet = tweetRepository.createTweet(text, username);
  res.status(201).json(tweet);
});

route.put('/:id', (req, res, next) => {
  const text = req.body.text;
  const id = req.params.id;
  const tweet = tweetRepository.updateTweet(id, text);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

route.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweetRepository.deleteTweet(id);
  res.sendStatus(204);
});

export default route;
