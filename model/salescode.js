import mongoose from "mongoose";


const salescodeSchema = new mongoose.Schema ({
    codeName: {
        type: String,
        required: true,
        unique: true
    },
    multiplier: {
        type: Number,
        required: true,
        default: 1
    }
})


//Sử dụng schema vào mongoDB
const salescodeModel = mongoose.model('salescodes', salescodeSchema);

export default salescodeModel