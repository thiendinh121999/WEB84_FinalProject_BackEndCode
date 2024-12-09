import express from 'express';
import salescodeControllers from '../controller/salescode.js';

const SalescodeRouter = express.Router();

SalescodeRouter.get('/getsalescode/:codeName', salescodeControllers.getSalescode) // localhost:8080/api/salescode/getsalescode/:codeName
SalescodeRouter.post('/createnewsalescode', salescodeControllers.createNewSalescode) // localhost:8080/api/salescode/createnewsalescode
SalescodeRouter.delete('/deleteOneSalescode/:_id', salescodeControllers.deleteOneSalescode) // localhost:8080/api/salescode/deleteOneSalescode/:_id

export default SalescodeRouter