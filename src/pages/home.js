import React from "react";
import '../App.css';
// import Chakra from '@chakra-ui/react';
import Contact from '../Components/Contact/Contact.js';
//import JobSearch from '../Components/JobSearch/JobSearch.js';
import Jumbotron from '../Components/Jumbotron/Jumbotron.js';
import Navbars from '../Components/Navbar/Navbar.js';
import JobForm from "../Components/JobForm/JobForm.js";

function Home() {
  return (
    <div>
        <Navbars />
        <Jumbotron />
        <JobForm />
       <Contact />
    </div>
  );
}

export default Home;
