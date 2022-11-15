const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://subham235:subham1234@cluster0.wuy84.mongodb.net/socialmediav2?retryWrites=true&w=majority").then(console.log("Database is connected")).catch((err)=>{console.log(err)})

app.use('/api/auth',require('./routes/userroute'))
app.use('/api/post' , require('./routes/postroute'))
app.listen(5000,()=>{
    console.log(`App is running on port : ${5000}`)
})