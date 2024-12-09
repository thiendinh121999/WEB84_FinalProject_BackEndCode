import express from 'express';
import requestControllers from '../controller/request.js';

const RequestRouter = express.Router();

RequestRouter.get('/getrequest', requestControllers.getListRequest) // localhost:8080/api/request/getrequest
RequestRouter.post('/createnewrequest', requestControllers.createRequest) // localhost:8080/api/request/createnewrequest
RequestRouter.delete('/deleterequest/:_id', requestControllers.deleteOneRequest) // localhost:8080/api/request/deleterequest/:_id

export default RequestRouter