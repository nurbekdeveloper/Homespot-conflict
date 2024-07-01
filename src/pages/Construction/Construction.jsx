import React from 'react'
import BuildingTypes from '../../componenets/types/BuildTypes'
import ContactForm from '../../componenets/form/ContactForm'
import CardContainer from '../../componenets/project/CardContainer'

function Construction() {
  return (
    <div>
         <BuildingTypes/>
         {/* <UsefulLinks/> */}

         <CardContainer/>
         <ContactForm/>
    </div>
  )
}

export default Construction
