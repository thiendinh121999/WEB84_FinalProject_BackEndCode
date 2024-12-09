import userModel from '../model/user.js';
import bcryptHashing from '../utilities/bcrypt.js';
import { generateToken, verifyToken } from '../utilities/tokens.js';

const userControllers = {
    //Dang ky tai khoan
    signUp: async (req,res) => {
        try {
            const { email, password, userName, phoneNumber } = req.body;
            const existedEmail = await userModel.findOne({
                email
            });
            if (existedEmail) throw new Error('Email đã tồn tại!');
            const hash = bcryptHashing.hashingPassword(password);
            const newUser = await userModel.create({
                email,
                password: hash.password,
                salt: hash.salt,
                userName,
                phoneNumber
            });
            res.status(201).send({
                data: newUser,
                message: 'Đăng ký thành công',
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

    signIn: async (req,res) => {
        try {
            const { email, password } = req.body;
            const currentUser = await userModel.findOne({
                email,
            });
            if (!currentUser) throw new Error('Sai tài khoản hoặc mật khẩu!');
            const checkPassword = bcryptHashing.verifyPassword(password, currentUser.password, currentUser.salt);
            if (!checkPassword) throw new Error('Sai tài khoản hoặc mật khẩu!');
            //Generate Token for sign in
           const getUser = {
                ...currentUser.toObject()
            };
            delete getUser.salt;
            delete getUser.password;
            const accessToken = generateToken({
                userId: getUser._id,
                email: getUser.email,
                typeToken: 'Access Token'
            }, 'AT');

            const refreshToken = generateToken({
                userId: getUser._id,
                email: getUser.email,
                typeToken: 'Refresh Token'
            }, 'RT');

            res.status(200).send({
                data: {
                    ...getUser,
                    accessToken,
                    refreshToken,
                },
                message: 'Xác thực thông tin thành công!',
                success: true
            })
        } catch (error) {
            res.status(401).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
        
    },
    /*signOut: async (req,res) => {
        try {
            req.session.destroy((err) => {
                if (err) {
                  throw new Error('Error clearing session');
                }
              });
          
              res.json({ message: 'Logged out successfully' });
        } catch (error) {
            res.status(401).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
        
    },*/
    getListUser: async (req,res) => {
        try {
            
            const data = await userModel.find();
            res.status(200).send({
                message: "Success!",
                data: data
            })
           
        } catch (error) {
            res.status(500).send({
                message: error.message,
                data: null
            })
        }
    },

}

export default userControllers;