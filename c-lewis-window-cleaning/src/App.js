import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/NavBar.css';

import MediaQuery from 'react-responsive';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';

import NavBar from './components/commons/NavBar';

import Home from './pages/Home';
import Form from './components/Form'

import WindowCleaning from './pages/Services/WindowCleaning';
import GutterCleaning from './pages/Services/GutterCleaning';
import PressureWashing from './pages/Services/PressureWashing';
// import ConservatoryCleaning from './pages/Services/ConservatoryCleaning';

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
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/window-cleaning" element={<WindowCleaning />} />
          <Route path="/gutter-cleaning" element={<GutterCleaning />} />
          <Route path="/pressure-washing" element={<PressureWashing />} />
          {/* <Route path="/conservatory-cleaning" element={<ConservatoryCleaning />} /> */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </body>
    </html>
  );
}

export default App;
