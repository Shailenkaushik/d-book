const mongoose = require("mongoose");

 
 const connectDb=async()=>{
      mongoose.connection.on('connected',()=> console.log("database connected"))
      await mongoose.connect(`${process.env.MONGODB_URI}/bookingdoctor`)
 }


 module.exports={
    connectDb
 }