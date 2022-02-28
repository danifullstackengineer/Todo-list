import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/tasks.js';
import path from 'path';

dotenv.config()
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)

// Serving static assets if in prod

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

mongoose
.connect(process.env.DB_URL)
.then(() => {
    console.log('Connected to db...');
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    })
})
.catch(err => {
    console.error(err)
})
