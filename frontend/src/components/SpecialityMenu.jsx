import React, { useEffect, useState } from 'react'
import { specialityData } from '../assets/assets'

 

const SpecialityMenu = () => {

  const [finalhours,setFinalHours]=useState([]);
  const [finaldates,setFinalDates]=useState([]);

    function timecheck(){
       const d=new Date();
       var hour=d.getHours()+1;
       var date=d.getDate();
       console.log(hour);
       console.log(date);
       const upcominghours=[];
       const upcomingdates=[];
       for(var i=1;i<6;i++){
        if(i%2==0){
 
          upcominghours.push(hour + ':30');
          upcomingdates.push(date);
        }
        else{

          upcominghours.push(hour + ':00');
          upcomingdates.push(date);
          hour++; 
        }
        date++;
        if(date>30) date=0;
         
       }
       setFinalDates(upcomingdates);
       setFinalHours(upcominghours);
       console.log(finalhours);
       console.log(finaldates);
    }  
    useEffect(()=>{
      timecheck();
    },[])

   
     const listItems=specialityData.map((doctor)=>
          <div className=' grid justify-items-center align-items-center  m-2 p-2'>
            <div>
              {doctor.speciality}
            </div>
            <img className='h-15 w-15 hover cursor-pointer p-2 m-2' src={doctor.image} alt="" />
            
          </div>
    );

  return (
    <div className='grid justify-items-center align-items-center m-5 p-10'>
      <div className='font-bold text-3xl p-2'>Find by Speciality</div>
      <div className='text-sm w-52 p-2'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</div>
      <ul className='flex p-4 m-2'>
        {listItems}
      </ul>
      <div>
      
      </div>

      
    </div>
  )
}

export default SpecialityMenu
