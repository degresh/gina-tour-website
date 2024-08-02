// utils/jwt.ts
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
