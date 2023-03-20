import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
// import Chakra from '@chakra-ui/react';
// import './Components/Contact/Contact.js';
// import './Components/JobSearch/JobSearch.js';
// import './Components/JobForm/JobForm.js'
// import './Components/Jumbotron/Jumbotron.js';
//import Navbar from './Components/Navbar/Navbar.js';
//import JobForm from "./Components/JobForm/JobForm.js";
//import { Navbar } from "react-bootstrap";
import Home from './pages/home.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
   
  );
}

export default App;
