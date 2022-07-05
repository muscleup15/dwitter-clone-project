import express from 'express';
import tweetRouter from './router/tweet.js';
import authRouter from './router/auth.js';
const app = express();

app.use('/tweet', tweetRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  return res.status(404).send('Not Found');
});
app.use((err, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
