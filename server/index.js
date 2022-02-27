import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/tasks.js';

dotenv.config()
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)


mongoose
.connect(process.env.DB_URL)
.then(() => {
    console.log('Connected to db...');
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch(err => {
    console.error(err)
})
