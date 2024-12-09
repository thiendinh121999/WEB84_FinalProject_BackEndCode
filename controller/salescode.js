import salescodeModel from '../model/salescode.js';
import { generateToken, verifyToken } from '../utilities/tokens.js';

const salescodeControllers = {
    getSalescode: async (req,res) => {
        try {
            const { codeName } = req.params; // Assuming you're fetching the codeName from the request parameters

            const data = await salescodeModel.findOne({ codeName });

            if (!data) {
            return res.status(404).send({
                message: 'Không tìm thấy salescode',
                data: null
            });
        }

        res.send({
            message: 'Lấy salescode thành công',
            data: data
        });
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    createNewSalescode: async (req,res) => {
        try {
            const {codeName, multiplier} = req.body
            const newSalescode = await salescodeModel.create({
                codeName,
                multiplier
            });
            res.status(201).send({
                data: newSalescode,
                message: 'Tạo salescode hàng thành công',
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
    deleteOneSalescode: async (req,res) => {
        try {
            const {_id} = req.params;
            // Find and delete the request document
            const deletedSalescode = await salescodeModel.findByIdAndDelete(_id);
            if (!deletedSalescode) {
                return res.status(404).json({ message: 'Salescode not found' });
              }
            res.status(200).json({ message: 'Salescode deleted successfully' });
        } catch (error) {
            res.status(500).send({
                message: error.message,
            })
        }
    }
}

export default salescodeControllers;