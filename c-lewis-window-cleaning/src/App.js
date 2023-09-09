import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/NavBar.css';

import MediaQuery from 'react-responsive'
import React, { useState } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Form from './components/Form'

import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonalsPage';

import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <MediaQuery minWidth={995}>
          <NavBar />
        </MediaQuery>
        <MediaQuery maxWidth={994}>
        </MediaQuery>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home#quote" element={<Form />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </body>
    </html>
  );
}

export default App;
