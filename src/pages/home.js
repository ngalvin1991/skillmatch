import React from "react";
import { Route, Routes } from "react-router-dom"
import '../App.css';
import Contact from '../Components/Contact/Contact.js';
//import JobSearch from '../Components/JobSearch/JobSearch.js';
import Jumbotron from '../Components/Jumbotron/Jumbotron.js';
import Navbars from '../Components/Navbar/Navbar.js';
import JobForm from "../Components/JobForm/JobForm.js";
import ModalComponent from "../Components/Modal/modal.js"
import Footer from "../Components/Footer/Footer.js";

function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  return (


<>
    {/* <Navbars />
      <Jumbotron />
      <Route element={<JobForm modalShow={modalShow} setModalShow={setModalShow}/>} path='JobSearch'/>
      <Contact />
      <ModalComponent modalShow={modalShow} setModalShow={setModalShow}/>
     
       */}
       <Navbars/>
    < Routes >
        <Route path="/" element={<Jumbotron/>}/>
          <Route
            path="JobSearch"
            element={<JobForm modalShow={modalShow} setModalShow={setModalShow}/>}
          />
          <Route path="contact" element={<Contact />} />
             </Routes >
             <ModalComponent modalShow={modalShow} setModalShow={setModalShow}/>
             <Footer />
             </>

  );
}

export default Home;
