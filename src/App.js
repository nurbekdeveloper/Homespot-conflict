
import { Suspense, lazy, useEffect } from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom"
import House from './pages/houses/Houses';
import Navbar from './componenets/Navbar';
import Footer from './componenets/common/footer/Footer'
import AllHouseType from './pages/allHousesType/allHouseType';
import TypesOfBeton from './pages/typesofBeton/typesOfbeton';
import MoreInformation from './pages/albom/MoreInformation';
import OurservesTwopage from './pages/ourservestwopage/OurservesTwopage';
import Modals from './componenets/appliacation/Modal';
import { useSelector } from 'react-redux';


import PersonalProject from './pages/home/PersonalProject';
import Loader from './componenets/loader/loader';

const Contact = lazy(() => import("./pages/contact/Contact"))
const Worker = lazy(() => import("./pages/worker/Worker"))
const About = lazy(() => import("./pages/about/About"))
const Construction = lazy(() => import("./pages/Construction/Construction"))
const Services = lazy(() => import("./pages/services/Sevices"))
const Main = lazy(() => import("./pages/main"))
const TypesHome  = lazy(() => import("./componenets/types-home/typesHome"))



function App() {
  const {modal} = useSelector(state=>state.modal)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (


    <div className="App">
      <Suspense fallback={<Loader />}>

        <Navbar />
        <Modals open={modal}/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Worker />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/project" element={<PersonalProject/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/data/:slug' element={<OurservesTwopage />} />
          <Route path='/services/:slug' element={< TypesOfBeton/>} />
          <Route path='/construction/:slug' element={<TypesHome/>} />
          <Route path='/construction-in/:slug/' element={<AllHouseType/>} />
          <Route path='/moreinformation/:slug/' element={<MoreInformation/>} />
          {/* <Route path='' element={<MoreInformation/>} /> */}
        </Routes>

        <Footer />
      </Suspense>
    </div>

  );
}

export default App;
