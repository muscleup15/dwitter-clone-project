import express from 'express';
import { tweets } from '../data/tweet.js';
const route = express.Router();
route.use(express.json());

route.get('/', (req, res, err) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

route.get('/:id', (req, res, err) => {
  const id = req.params.id;
  const data = tweets.find((t) => t.id == id);
  res.status(200).json(data);
});

route.post('/:id', (req, res, err) => {
  const tweet = req.body;
  const newtweets = [...tweets, tweet];
  res.status(201).json(newtweets);
});

route.put('/:id', (req, res, next) => {
  const text = req.body.text;
  const id = req.params.id;
  const data = tweets.find((t) => t.id == id);
  data.text = text;
  res.status(201).json(data);
});

export default route;
