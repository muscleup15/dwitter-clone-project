import express from 'express';
import { tweets } from '../data/tweet.js';
const route = express.Router();
route.use(express.json());

export async function getAllTweets(req, res, err) {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
}

export async function getTweetById(req, res, err) {
  const id = req.params.id;
  const data = tweets.find((t) => t.id == id);
  res.status(200).json(data);
}

export async function createTweet(req, res, err) {
  const tweet = req.body;
  tweets.unshift(tweet);
  res.status(201).json(tweets);
}

export async function updateTweet(req, res, next) {
  const text = req.body.text;
  const id = req.params.id;
  const data = tweets.find((t) => t.id == id);
  data.text = text;
  res.status(201).json(data);
}

export async function deleteTweet(req, res, next) {
  const id = req.params.id;
  const num = tweets.findIndex((t) => t.id == id);
  tweets.splice(num, 1);
  res.sendStatus(204);
}
