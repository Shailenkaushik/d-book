// api for adding doctor

const addDoctor=async(req,res)=>{
   console.log("inside add doctor")
  
     try{
      console.log("inside add doctor")
        const { name , email,password,speciality,degree,experience,about,fees,address}=req.body
        const imageFile=req.file;
        console.log({ name , email,password,speciality,degree,experience,about,fees,address},imageFile)
     }catch(error){

     }
     res.send("hemmo")
}


module.exports={
   addDoctor
}