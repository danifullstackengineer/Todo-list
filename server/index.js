const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotnev');
const bodyParser = require('body-parser');
const router = require('./routes/tasks.js');
const path = require('path');

dotenv.config()
const app = express();

if(!process.env.NODE_ENV){
    app.use(cors());
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)

// Serving static assets if in prod

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "..", "client", "build")))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'..' ,'client', 'build', 'index.html'));
    })
}

mongoose
.connect(process.env.DB_URL)
.then(() => {
    console.log('Connected to db...');
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 5000}}`);
    })
})
.catch(err => {
    console.error(err)
})
