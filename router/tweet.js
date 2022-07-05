import express from 'express';
const route = express.Router();

route.get('/', (req, res, err) => {
  res.sendStatus(200);
});

export default route;
