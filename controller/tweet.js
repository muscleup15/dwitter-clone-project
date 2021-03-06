import express from 'express';
import * as tweetRepository from '../data/tweet.js';
import 'express-async-errors';
const route = express.Router();
route.use(express.json());

export async function getTweets(req, res, err) {
  const username = req.query.username;
  const data = await (username
    ? tweetRepository.getTweetByUsername(username)
    : tweetRepository.getAllTweets());
  res.status(200).json(data);
}

export async function getTweet(req, res, err) {
  const id = req.params.id;
  const tweet = await tweetRepository.getTweetById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function createTweet(req, res, err) {
  const { text, username } = req.body;
  const tweet = await tweetRepository.create(text, username);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res, next) {
  const text = req.body.text;
  const id = req.params.id;
  const tweet = await tweetRepository.update(id, text);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function deleteTweet(req, res, next) {
  const id = req.params.id;
  await tweetRepository.remove(id);
  res.sendStatus(204);
}
