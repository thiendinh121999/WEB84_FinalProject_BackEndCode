import express from 'express';
import UserRouter from './user.js';
import ProductRouter from './product.js';
import RequestRouter from './request.js';
import OrderRouter from './order.js';
import SalescodeRouter from './salescode.js';

const RootRouter = express.Router();

RootRouter.use('/user', UserRouter);
RootRouter.use('/product', ProductRouter);
RootRouter.use('/request', RequestRouter);
RootRouter.use('/order', OrderRouter);
RootRouter.use('/salescode', SalescodeRouter);


export default RootRouter;