import userService from '../services/userService.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

// TODO: rewrite statuses

const generateAccessToken = (id) => {
  const payload = {
    id,
  }
  return jwt.sign(payload, config.secret, {expiresIn: '24h'});
}

class UserController {
  async registration(req, res) {
    try {
      const isUserExists = await userService.getUserByEmail(req.body.email);
      if(isUserExists) {
        return res.status(400).json({message: 'User already exists'});
      } 
      const user = await userService.createUser(req.body);
      return res.json({user: user, message: 'New user created'});
    }
    catch(err) {
      return res.status(400).json({message: 'Registration error'});
    }
  }

  async login(req, res) {
    try {
      const user = await userService.getUserByEmail(req.body.email);
      if(!user) {
        return res.status(400).json({message: 'User not found'});
      }
      if(user.password !== req.body.password) {
        return res.status(400).json({message: 'Invalid password'});
      }
      const token = generateAccessToken(user.id);
      return res.json({token, user, message: 'User login successfully'});
    }
    catch(err) {
      return res.status(400).json({message: 'Login error'});
    }
  }

  async checkAuth(req, res) {
    try {
      return res.json({message: 'User is authorized'});
    }
    catch(err) {
      return res.status(400).json({message: 'Unknown check error'});
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      return res.json({user: user, message: 'User updated successfully'});
    }
    catch(err) {
      return res.status(400).json({message: 'Unknown update error'});
    }
  }

  async deleteUser(req, res) {
    try {
      const user = userService.deleteUser(req.params.id);
      return res.json(user);
    }
    catch(err) {
      return res.status(400).json({message: 'Unknown delete error'});
    }
  }
}

export default new UserController();
