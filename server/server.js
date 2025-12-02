const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const Port = 3000
dotenv.config()
 

const api = require('./routes/api')
const {connectDB} = require('./config/db')

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:"true"}))
app.use(cors())

app.use('/api', api)

app.get('/',(req,res)=>{
    res.send("Hello Web");
});

app.listen(Port,()=>{
    console.log("Server is Running.......");
})