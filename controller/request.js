import requestModel from '../model/request.js';
import { generateToken, verifyToken } from '../utilities/tokens.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; 
dotenv.config();

const requestControllers = {
    getListRequest: async (req,res) => {
        try {
            const { page, limit } = req.query;

            const pageSize = parseInt(limit) 
            const pageNumber = parseInt(page) 

            const totalItems = await requestModel.countDocuments();
            const skip = (pageNumber - 1) * pageSize;
            const data = await requestModel.find().skip(skip).limit(pageSize);
            res.status(200).send({
                message: "New Product Get Success!",
                total: totalItems,
                data: data          
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },
    createRequest: async (req,res) => {
        try {
            const {request, customerName, customerPhone,customerEmail} = req.body
            const newRequest = await requestModel.create({
                request,
                customerName,
                customerPhone,
                customerEmail
            });
            res.status(201).send({
                data: newRequest,
                message: 'Tạo SP thun thành công',
                success: true
            })
            //Mail sender
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // Có thể thay đổi tùy thuộc vào cấu hình Mailtrap của bạn
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASS,
            },
          });
          const mailOptions = {
            from: 'RickyStore-noreply',
            to: customerEmail,
            subject: 'Yêu cầu của bạn tới Ricky Store đã được tiếp nhận:',
            text: `
              Yêu cầu của bạn đến Ricky Store đã được tiếp nhận. Chúng tôi sẽ liên hệ đến bạn trong thời gian sớm nhất. Thông tin yêu cầu chi tiết
              Tên khách hàng: ${customerName}
              Số điện thoại: ${customerPhone}
              Email: ${customerEmail}
              Nội dung yêu cầu: ${request}
            `,
          };
            try {
                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
            } catch (error) {
                console.error('Error sending email:', error);
            }
        } catch (error) {
            res.status(403).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
    },
    deleteOneRequest: async (req,res) => {
        try {
            const {_id} = req.params;
            // Find and delete the request document
            const deletedRequest = await requestModel.findByIdAndDelete(_id);
            if (!deletedRequest) {
                return res.status(404).json({ message: 'Request not found' });
              }
            res.status(200).json({ message: 'Request deleted successfully' });
        } catch (error) {
            res.status(500).send({
                message: error.message,
            })
        }
    }
}

export default requestControllers;