
import Header from '../componenets/header/Header'

import AboutService from '../componenets/ourserves/AboutService'

import Technology from '../componenets/technology/Technology'

import Tree from '../componenets/trees/Tree'


import CardContainer from '../componenets/project/CardContainer'
import BuildingTypes from '../componenets/types/BuildTypes'
import ClientOpinion from './ClientOpinion/ClientOpinion'
import JivoChatWidget from '../chat/chat'
import SwedStandardWidget from '../chat/chat'

import ContactForm from '../componenets/form/ContactForm'








function Main() {
  return (
    <div>
      <Header/>

      <BuildingTypes/>
      <Tree/>
      {/* <UsefulLinks/> */}
      <AboutService/>
      <Technology/>
      <CardContainer/>
      <SwedStandardWidget/>
      <ClientOpinion/>


     <ContactForm/>


    </div>
  )
}

export default Main