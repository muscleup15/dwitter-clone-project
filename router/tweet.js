import express from 'express';
const route = express.Router();

route.get('/', (req, res, err) => {
  //getalltweets
  res.sendStatus(200);
});

route.get('/:id', (req, res, err) => {
  //gettweetsbyid
  res.sendStatus(200);
});

route.get('/:username', (req, res, err) => {
  //gettseetsbyusername
  res.sendStatus(200);
});

route.post('/:id', (req, res, err) => {
  //createtweets
  res.sendStatus(200);
});

route.put('/:id', (req, res, next) => {
  res.sendStatus(200);
});
export default route;
