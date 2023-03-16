import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Chakra from '@chakra-ui/react';
import './Components/Contact/Contact';
import './Components/JobSearch/JobSearch';
import './Components/JobForm/JobForm'
import './Components/Jumbotron/Jumbotron';
import './Components/Navbar/Navbar.js';
import JobForm from "./Components/JobForm/JobForm";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
      </header>
    </div>
  );
}

export default App;
