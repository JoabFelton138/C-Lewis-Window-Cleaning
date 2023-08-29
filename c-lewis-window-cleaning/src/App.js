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

function App() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <MediaQuery minWidth={995}>
        <NavBar/>
      </MediaQuery>
      <MediaQuery maxWidth={994}>
      </MediaQuery>
      <body>
          <AltCarousel/> 
          <About/>
      </body>
    </div>
  );
}

export default App;
