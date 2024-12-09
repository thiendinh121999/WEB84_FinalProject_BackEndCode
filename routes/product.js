import express from 'express';
import productControllers from '../controller/product.js';

const ProductRouter = express.Router();
ProductRouter.get('/getallproduct', productControllers.getAllProduct) // localhost:8080/api/product/getallproduct
ProductRouter.get('/getnewproduct', productControllers.getNewProduct) // localhost:8080/api/product/getnewproduct
ProductRouter.get('/getrunproduct', productControllers.getRunProduct) // localhost:8080/api/product/getrunproduct
ProductRouter.get('/getseasonalproduct', productControllers.getSeasonalProduct) // localhost:8080/api/product/getseasonalproduct
ProductRouter.get('/getthunproduct', productControllers.getThunProduct) // localhost:8080/api/product/getthunproduct
ProductRouter.post('/createnewproduct', productControllers.createNewProduct) // localhost:8080/api/product/createnewproduct
ProductRouter.post('/createrunproduct', productControllers.createRunProduct) // localhost:8080/api/product/createrunproduct
ProductRouter.post('/createseasonalproduct', productControllers.createSeasonalProduct) // localhost:8080/api/product/createseasonalproduct
ProductRouter.post('/createthunproduct', productControllers.createThunProduct) // localhost:8080/api/product/createseasonalproduct
ProductRouter.delete('/deletenewproduct', productControllers.deleteAllNew) // localhost:8080/api/product/deletenewproduct
ProductRouter.delete('/deletethunproduct', productControllers.deleteAllThun)
ProductRouter.delete('/deleterunproduct', productControllers.deleteAllRun)
ProductRouter.delete('/deleteseasonalproduct', productControllers.deleteAllSeasonal)
ProductRouter.delete('/deleteallproduct', productControllers.deleteAllProduct)
ProductRouter.delete('/deleteoneproduct/:_id', productControllers.deleteOneProduct) //localhost:8080/api/product/deleteoneproduct/:_id
export default ProductRouter