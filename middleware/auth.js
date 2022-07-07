import jwt from 'jsonwebtoken';
import * as authRepository from '../data/auth.js';

const isAuth = (req, res, next) => {
  const authorization = req.get('Authorization');
  const token = authorization.split(' ');
  const realtoken = token[1];
  jwt.verify(realtoken, '&E)H@McQfTjWnZr4u7x!', async (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'UnAuthorized User' });
    }
    const user = await authRepository.findByID(decoded.userid);
    if (!user) {
      res.status(401).json({ message: 'No User' });
    }
    req.userid = user.id;
    next();
  });
};

export default isAuth;
