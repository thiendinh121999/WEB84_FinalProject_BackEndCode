import express from 'express';
import mongoose, { get } from 'mongoose';
import userControllers from './controller/user.js';
import userMiddlewares from './middlewares/user.js';
import RootRouter from './routes/root.js';
import cors from 'cors';
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());


await mongoose.connect('mongodb+srv://thiendinh121999:Bahoanghai123@learnmongo.nrrok.mongodb.net/web84_rickystore?retryWrites=true&w=majority&appName=LearnMongo'
).then(()=> {
    console.log('Connected database!')
})



app.get('',(req, res) => {
    res.status(200).send({
        message: 'Connected server!'
    })
});


app.use('/api', RootRouter)

app.listen(PORT, () => {
    console.log('Server is running!');
}); 