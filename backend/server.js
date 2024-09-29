const express=require('express');
const cors =require('cors')
// import express from 'express';
// import cors from 'cors'
// import 'dotenv/config'

const connectDb = require('./config/mongodb.js');
const {adminRouter} = require( './routes/adminRoute.js');
const app=express();
app.use(express.json());
// app.use(cors);
const port= 3000;

// connectDb()

app.get('/',(req,res)=>{

   console.log("hemlo")
    return res.send("you are fiered");
})

app.use('/api/admin',adminRouter);

app.listen(port,()=>{
    console.log(`you are successfully connected to port ${port}`)
})