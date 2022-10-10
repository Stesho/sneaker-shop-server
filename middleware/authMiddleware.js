import jwt from 'jsonwebtoken';
import config from '../config.js';

const auth = (req, res, next) => {
  if(req.method === 'OPTIONS') {
    next();
  }
  
  try {
    const token = req.query.authorization.split(' ')[1];
    // const token = req.headers.authorization.split(' ')[1];
    if(!token) {
      //status 401
      return res.status(403).json({message: "User isn't authorized asd"});
    }
    const decodedData = jwt.verify(token, config.secret);
    req.user = decodedData;
    next();
  }
  catch(err) {
    return res.status(403).json({message: "User isn't authorized"});
  }
}

export default auth;
