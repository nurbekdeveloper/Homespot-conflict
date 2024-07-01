import React, { useEffect } from 'react'

import Header from '../../componenets/header/Header'
import ServiceCardContainer from '../../componenets/serivicesCard/ServiceCardContainer'
import AboutService from '../../componenets/ourserves/AboutService'
import ContactForm from '../../componenets/form/ContactForm'


function Sevices() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>

      <Header/>
      <ServiceCardContainer/>
      <AboutService/>
      <ContactForm/>

    </div>
  )
}

export default Sevices
