import express from 'express';
import orderControllers from '../controller/order.js';

const OrderRouter = express.Router();

OrderRouter.get('/getlistorder', orderControllers.getListOrder) // localhost:8080/api/order/getlistorder
OrderRouter.post('/createneworder', orderControllers.createNewOrder) // localhost:8080/api/order/createneworder
OrderRouter.delete('/deleteorder/:_id', orderControllers.deleteOneOrder) // c:_id

export default OrderRouter