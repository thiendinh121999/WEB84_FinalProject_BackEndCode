import userModel from "../model/user.js"

const userMiddlewares = {
    validateSignUp: (req,res,next) => {
        try {
            const {userName, email, phoneNumber, password} = req.body
            if (!userName) throw new Error('Name is required!')
            if (!email) throw new Error('email is required!')
                if (email) {
                    const formatEmail = String(email)
                        .toLowerCase()
                        .match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        );
                    if (!formatEmail) throw new Error('Email không đúng định dạng!');
                }
            if (!phoneNumber) throw new Error('Phone number is required!')
            if (!password) throw new Error('Password is required!')
            return next();
    
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null
            })
        }
    },

    validateSignIn: (req,res,next) => {
        try {
            const { email, password } = req.body;
            if (!email) throw new Error('Thiếu email!');
            if (email) {
                const formatEmail = String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                if (!formatEmail) throw new Error('Email không đúng định dạng!');
            }
            if (!password) throw new Error('Thiếu password!');
            next();
        } catch (error) {
            res.status(403).send({
                data: null,
                message: error.message,
                success: false,
                error
            });
        }
    },
}

export default userMiddlewares