//Cú pháp khi dùng postman

// localhost:8080/api/

import express from 'express';
import userControllers from '../controller/user.js';
import userMiddlewares from '../middlewares/user.js';

const UserRouter = express.Router();

UserRouter.post('/signup', userMiddlewares.validateSignUp, userControllers.signUp) // localhost:8080/api/user/signup
UserRouter.post('/signin' , userMiddlewares.validateSignIn,  userControllers.signIn) // localhost:8080/api/user/signin
//UserRouter.post('/signout',  userControllers.signOut) // localhost:8080/api/user/signout
UserRouter.get('/users', userControllers.getListUser)

export default UserRouter