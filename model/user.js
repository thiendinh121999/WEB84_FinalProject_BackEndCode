import mongoose from "mongoose";


const schema = new mongoose.Schema ({

    userName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

})


//Sử dụng schema vào mongoDB
const userModel = mongoose.model('users', schema);

export default userModel