import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/NavBar.css';
import './CSS/AltCarousel.css';

import MediaQuery from 'react-responsive'

import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import { useState } from 'react';
import AltCarousel from './components/AltCarousel';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <MediaQuery minWidth={995}>
        <NavBar/>
      </MediaQuery>
      <MediaQuery maxWidth={994}>
        <MobileNav/>
      </MediaQuery>
      <body>
          <AltCarousel/> 
      </body>
    </div>
  );
}

export default App;
