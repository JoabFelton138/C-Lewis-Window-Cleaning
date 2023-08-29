import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/NavBar.css';
import './CSS/AltCarousel.css';
import './CSS/About.css';

import MediaQuery from 'react-responsive'
import React, { useState } from 'react';

import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import AltCarousel from './components/AltCarousel';
import About from './components/About';
import Quote from './components/Quote';

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
      </body>
    </html>
  );
}

export default App;
