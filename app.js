import express from 'express';
import tweetRouter from './router/tweet.js';
import authRouter from './router/auth.js';
const app = express();

app.use('/tweet', tweetRouter);
app.use('/auth', authRouter);

app.listen(8080);
