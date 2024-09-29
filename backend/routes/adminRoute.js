const express = require('express');
const  {addDoctor} = require('../controllers/adminController.js')

const {upload} =require( '../middlewares/multer.js')

const adminRouter=express.Router();

// adminRouter.post('/add-doctor',upload.single('image',addDoctor));
adminRouter.post('/add-doctor',upload.single('image'),addDoctor);

module.exports={
    adminRouter
}