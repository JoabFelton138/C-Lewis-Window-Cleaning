import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/MobileNav.css';

import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';

import Home from './pages/Home';
import Form from './components/Form'

import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonalsPage';

import Footer from './components/Footer';

function App() {
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

    return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
          {/* <NavBar /> */}
          <MobileNav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </body>
    </html>
  );
}

export default App;
