import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; 
dotenv.config();

const generateToken = (document, typeToken) => {
    const getSecretKey = (typeToken === 'AT' ? process.env.AT_SECRETKEY : process.env.RT_SECRETKEY);
    const getExp = (typeToken === 'AT' ? 300 : 3600 * 24 * 7)
    if (!getSecretKey) {
        throw new Error('Secret key is missing for ' + typeToken + ' token');
      }
    const token = jwt.sign(document, getSecretKey, {
        // 60 = 1m
        expiresIn: getExp
    });
    return token;
};

const verifyToken = (token, typeToken) => {
    const getSecretKey = (typeToken === 'AT' ? process.env.AT_SECRETKEY : process.env.RT_SECRETKEY);
    const verifyToken = jwt.verify(token, getSecretKey);
    return verifyToken;
}
export {
    generateToken,
    verifyToken
}