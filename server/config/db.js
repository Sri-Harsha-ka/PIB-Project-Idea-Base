const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL

const connectDB = async () =>{
    try{
        await mongoose.connect(DB_URL)
        console.log("Connected to DB....")
    }catch(err){
        console.err(err)
    }
}

module.exports = {connectDB}