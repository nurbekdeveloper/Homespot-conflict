import React from 'react'
import DefaultNavbar from './defaultNavbar'
import MobileNavbar from './mobileNavbar'
import '../../App.css'

const Navbar = () => {
  return (
    <div>
      <div className='desktop'>
      <DefaultNavbar/>
      </div>
      <div className='mobile'>
      <MobileNavbar/>
      </div>
     
   
    </div>
  )
}

export default Navbar
