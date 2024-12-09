import mongoose from "mongoose";


const orderSchema = new mongoose.Schema ({
    customerName: {
        type: String,
        required: true,
    },
    customerPhoneNumber: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    }, 
    customerAdress: {
        type: String,
        required: true,
    },
    orderList:[{
        itemName: { type: String, required: true },
        itemImage: { type: String, required: true },
        itemPrice: { type: Number, required: true }
    }],
    customerPayCard: {
        type: String,
    },
    totalBill: {
        type: Number,
        required: true
    },
    saleOff: {
        type: String,
        required: true
    },
    payMethod: {
        type: String,
        required: true
    }
})


//Sử dụng schema vào mongoDB
const orderModel = mongoose.model('orders', orderSchema);

export default orderModel