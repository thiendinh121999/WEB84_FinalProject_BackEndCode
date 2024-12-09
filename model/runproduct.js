import mongoose from "mongoose";


const runProductSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    colorurl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    review: {
        type: Number,
    },
    detailimage1: {
        type: String,
    },
    detailimage2: {
        type: String,
    },
    detailimage3: {
        type: String,
    },
    detailimage4: {
        type: String,
    },
    detailimageBig1: {
        type: String,
    },
    detailimageBig2: {
        type: String,
    },
    id: {
        type: String,
        default:"1"
    }
})


//Sử dụng schema vào mongoDB
const runProductModel = mongoose.model('runProducts', runProductSchema);

export default runProductModel