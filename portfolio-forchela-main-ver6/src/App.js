import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/index';
import Servicos from './pages/services';
import NavBar from './components/NavBar';
import About from './pages/about';

function App() {
  return (
    <Router>      
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Servicos />} />
        <Route exact path="/about" element={<About />} />
        </Routes>     
    </Router>
  );
}

export default App;
