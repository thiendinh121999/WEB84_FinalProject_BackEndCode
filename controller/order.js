import orderModel from '../model/order.js';
import { generateToken, verifyToken } from '../utilities/tokens.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; 
dotenv.config();

const orderControllers = {
    getListOrder: async (req,res) => {
        try {
            const { page, limit } = req.query;

            const pageSize = parseInt(limit) 
            const pageNumber = parseInt(page) 

            const totalItems = await orderModel.countDocuments();
            const skip = (pageNumber - 1) * pageSize;
            const data = await orderModel.find().skip(skip).limit(pageSize);
            res.status(200).send({
                message: "Order List Get Success!",
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
    createNewOrder: async (req,res) => {
        try {
            const {customerName, customerPhoneNumber,customerEmail, customerAdress, orderList, customerPayCard, saleOff, totalBill, payMethod} = req.body
            const newOrder = await orderModel.create({
                customerName,
                customerPhoneNumber,
                customerEmail,
                customerAdress,
                orderList,
                customerPayCard,
                saleOff,
                totalBill,
                payMethod
            });
            res.status(201).send({
                data: newOrder,
                message: 'Tạo đơn hàng thành công',
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
            subject: 'Cám ơn bạn đã mua sắm tại Ricky Store',
            text: `
              Đơn hàng của bạn đã được tiếp nhận. Thông tin đơn hàng:
              Tên khách hàng: ${customerName}
              Số điện thoại: ${customerPhoneNumber}
              Email: ${customerEmail}
              Địa chỉ giao hàng: ${customerAdress}
              Danh sách sản phẩm: ${orderList.map(item => `<li>${item.itemName} - ${item.itemPrice} VNĐ</li>`).join('')}
              Áp dụng khuyến mại: ${saleOff}
              Thành tiền: ${totalBill} VNĐ
              Hình thức thanh toán: ${payMethod}
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
    deleteOneOrder: async (req,res) => {
        try {
            const {_id} = req.params;
            // Find and delete the request document
            const deletedOrder = await orderModel.findByIdAndDelete(_id);
            if (!deletedOrder) {
                return res.status(404).json({ message: 'Order not found' });
              }
            res.status(200).json({ message: 'Order deleted successfully' });
        } catch (error) {
            res.status(500).send({
                message: error.message,
            })
        }
    }
}

export default orderControllers;