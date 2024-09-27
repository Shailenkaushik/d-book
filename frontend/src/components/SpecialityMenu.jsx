import React from 'react'
import { specialityData } from '../assets/assets'

 

const SpecialityMenu = () => {

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
