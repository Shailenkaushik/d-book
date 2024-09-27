import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex justify-between gap-5 bg-primary text-white m-5 p-12'>
       <div className='content-center'>
            <p className='text-5xl m-2 p-2'>Book Appointment <br/> With Trusted Doctors</p>
            <div className='flex direction-row w-3/4'>
                <img className='w-24 m-2' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.</p>
            </div>
            <a href='#speciality' className=' text-black bg-white rounded-full m-2 p-2'>Book Appointment</a>
       </div> 
       <div>
        <img src={assets.header_img} alt="" />
       </div>
    </div>
  )
}

export default Header
