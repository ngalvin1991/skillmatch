import React from "react";
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
    <div>
      <Navbars />
      <Jumbotron />
      <JobForm modalShow={modalShow} setModalShow={setModalShow}/>
      <Contact />
      <ModalComponent modalShow={modalShow} setModalShow={setModalShow}/>
      <Footer />
    </div>
  );
}

export default Home;
