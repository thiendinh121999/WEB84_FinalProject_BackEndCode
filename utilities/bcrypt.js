import bcrypt from 'bcrypt';
const bcryptHashing = {
    hashingPassword: (password) => {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        return {
            password: hashPassword,
            salt
        }
    },
    verifyPassword: async (password, hashPassword, salt) => {
        return await bcrypt.compare(password, hashPassword)
    }
};
export default bcryptHashing;