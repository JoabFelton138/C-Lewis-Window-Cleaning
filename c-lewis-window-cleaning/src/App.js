import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/NavBar.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/commons/NavBar';

import ScrollToTop from './components/commons/ToTop';
import Home from './pages/Home';
import Form from './components/Form'
import WindowCleaning from './pages/Services/WindowCleaning';
import GutterCleaning from './pages/Services/GutterCleaning';
import PressureWashing from './pages/Services/PressureWashing';
import ConservatoryCleaning from './pages/Services/ConservatoryCleaning';

import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonalsPage';

import Footer from './components/commons/Footer';

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
        setScreenWidth(
        window.innerWidth)
    }
    window.addEventListener('resize', handleResize);    
})

  return (
        <div className='app'>
            <ScrollToTop/> 
            <NavBar/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/window-cleaning' Component={WindowCleaning}/>
              <Route path='/gutter-cleaning' Component={GutterCleaning}/>
              <Route path='/pressure-washing' Component={PressureWashing}/>              
              <Route path='/conservatory-cleaning' Component={ConservatoryCleaning}/>                            
            </Routes>
            <Footer/>
        </div>
  );
}

export default App;
