import mongoose from "mongoose";


const requestSchema = new mongoose.Schema ({
    request: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true,
    }, 
    customerEmail: {
        type: String,
        required: true,
    },
})


//Sử dụng schema vào mongoDB
const requestModel = mongoose.model('requests', requestSchema);

export default requestModel