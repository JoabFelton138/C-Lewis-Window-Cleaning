import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/NavBar.css';

import MediaQuery from 'react-responsive'
import React, { useState } from 'react';

import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';

import AltCarousel from './components/Home/AltCarousel';
import About from './components/Home/About';
import Portfolio from './components/Home/Portfolio';
import Why from './components/Home/Why';
import Quote from './components/Home/Quote';
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
        <NavBar/>
      </MediaQuery>
      <MediaQuery maxWidth={994}>
      </MediaQuery>
        <AltCarousel/> 
        <About/>
        <Portfolio/>
        <Why/>
        <Footer/>
      </body>
    </html>
  );
}

export default App;
