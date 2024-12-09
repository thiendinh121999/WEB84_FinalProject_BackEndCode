import newProductModel from '../model/newproduct.js';
import runProductModel from '../model/runproduct.js';
import seasonalProductModel from '../model/seasonalproduct.js';
import thunProductModel from '../model/thunproduct.js';
import allProductModel from '../model/allproducts.js';
import { generateToken, verifyToken } from '../utilities/tokens.js';

const productControllers = {
    getAllProduct: async (req,res) => {
        try {
            
            const [dataNewProduct, dataSeasonalProduct, dataRunProduct, dataThunProduct] = await Promise.all([
                newProductModel.find(),
                seasonalProductModel.find(),
                runProductModel.find(),
                thunProductModel.find(),
            ]);
            /*const dataNewProduct = await newProductModel.find();
            const dataSeasonalProduct = await seasonalProductModel.find();
            const dataRunProduct = await runProductModel.find();
            const dataThunProduct = await newProductModel.find();*/
            const dataAllProduct =[...dataNewProduct, ...dataSeasonalProduct, ...dataRunProduct, ...dataThunProduct]
            //const data = await allProductModel.find()
            const { page, limit } = req.query;

            const pageSize = parseInt(limit) 
            const pageNumber = parseInt(page) 
            const totalItems = dataAllProduct.length
            const skip = (pageNumber - 1) * pageSize;

            res.status(200).send({
                message: "All Product Get Success!",
                total: totalItems,
                data: dataAllProduct          
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    getNewProduct: async (req,res) => {
        try {
            
            const data = await newProductModel.find();
            res.status(200).send({
                message: "New Product Get Success!",
                data: data
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    getRunProduct: async (req,res) => {
        try {
            
            const data = await runProductModel.find();
            res.status(200).send({
                message: "Run Product Get Success!",
                data: data
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    getSeasonalProduct: async (req,res) => {
        try {
            
            const data = await seasonalProductModel.find();
            res.status(200).send({
                message: "Seasonal Product Get Success!",
                data: data
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    getThunProduct: async (req,res) => {
        try {
            
            const data = await thunProductModel.find();
            res.status(200).send({
                message: "Thun Product Get Success!",
                data: data
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    createNewProduct: async (req,res) => {
        try {
            const {  name, type, description, colorurl, price, image, review, detailimage1, detailimage2, detailimage3, detailimage4, detailimageBig1, detailimageBig2, id} = req.body;
            const newProduct = await newProductModel.create({
                name,
                type,
                description,
                colorurl,
                price,
                image,
                review,
                detailimage1,
                detailimage2,
                detailimage3,
                detailimage4,
                detailimageBig1,
                detailimageBig2,
                id,
            });
            res.status(201).send({
                data: newProduct,
                message: 'Tạo SP new thành công',
                success: true
            })
        } catch (error) {
            res.status(403).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
    },
    createRunProduct: async (req,res) => {
        try {
            const {  name, type, description, colorurl, price, image, review, detailimage1, detailimage2, detailimage3, detailimage4, detailimageBig1, detailimageBig2, id } = req.body;
            const newRunProduct = await runProductModel.create({
                name,
                type,
                description,
                colorurl,
                price,
                image,
                review,
                detailimage1,
                detailimage2,
                detailimage3,
                detailimage4,
                detailimageBig1,
                detailimageBig2,
                id,
            });
            res.status(201).send({
                data: newRunProduct,
                message: 'Tạo SP run thành công',
                success: true
            })
        } catch (error) {
            res.status(403).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
    },
    createSeasonalProduct: async (req,res) => {
        try {
            const {  name, type, description, colorurl, price, image, review, detailimage1, detailimage2, detailimage3, detailimage4, detailimageBig1, detailimageBig2, id } = req.body;
            const newSeasonalProduct = await seasonalProductModel.create({
                name,
                type,
                description,
                colorurl,
                price,
                image,
                review,
                detailimage1,
                detailimage2,
                detailimage3,
                detailimage4,
                detailimageBig1,
                detailimageBig2,
                id,
            });
            res.status(201).send({
                data: newSeasonalProduct,
                message: 'Tạo SP seasonal thành công',
                success: true
            })
        } catch (error) {
            res.status(403).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
    },
    createThunProduct: async (req,res) => {
        try {
            const {  name, type, description, colorurl, price, image, review, detailimage1, detailimage2, detailimage3, detailimage4, detailimageBig1, detailimageBig2, id} = req.body;
            const newThunProduct = await thunProductModel.create({
                name,
                type,
                description,
                colorurl,
                price,
                image,
                review,
                detailimage1,
                detailimage2,
                detailimage3,
                detailimage4,
                detailimageBig1,
                detailimageBig2,
                id,
            });
            res.status(201).send({
                data: newThunProduct,
                message: 'Tạo SP thun thành công',
                success: true
            })
        } catch (error) {
            res.status(403).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
    },
    deleteAllNew: async (req,res) => {
        newProductModel.deleteMany({})
        .then(() => {
        console.log('All documents deleted successfully.');
    })
    },
    deleteAllRun: async (req,res) => {
        runProductModel.deleteMany({})
        .then(() => {
        console.log('All documents deleted successfully.');
    })
    },
    deleteAllThun: async (req,res) => {
        thunProductModel.deleteMany({})
        .then(() => {
        console.log('All documents deleted successfully.');
    })
    },
    deleteAllSeasonal: async (req,res) => {
        seasonalProductModel.deleteMany({})
        .then(() => {
        console.log('All documents deleted successfully.');
    })
    },
    deleteAllProduct: async (req,res) => {
        allProductModel.deleteMany({})
        .then(() => {
        console.log('All documents deleted successfully.');
    })
    },
    deleteOneProduct: async (req, res) => {
        const {_id} = req.params;
        try {
            
            // Find the product and its corresponding model
        const newProduct = await newProductModel.findOne({ _id }).exec();
        if (newProduct) {
            await newProductModel.deleteOne({ _id });
            return res.status(200).json({ message: 'New Product deleted successfully' });
        }

        const seasonalProduct = await seasonalProductModel.findOne({ _id }).exec();
        if (seasonalProduct) {
            await seasonalProductModel.deleteOne({ _id });
            return res.status(200).json({ message: 'Seasonal Product deleted successfully' });
        }
        const runProduct = await runProductModel.findOne({ _id }).exec();
        if (runProduct) {
            await runProductModel.deleteOne({ _id });
            return res.status(200).json({ message: 'Run Product deleted successfully' });
        }
        const thunProduct = await thunProductModel.findOne({ _id }).exec();
        if (thunProduct) {
            await thunProductModel.deleteOne({ _id });
            return res.status(200).json({ message: 'Thun Product deleted successfully' });
        }

        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error: error.message });
        }
    }
}

export default productControllers;