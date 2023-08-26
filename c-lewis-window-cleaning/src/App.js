import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './CSS/NavBar.css';

import MediaQuery from 'react-responsive'

import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import { useState } from 'react';
import Carousel from './components/Carousel';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  return (
    <div className="App">
      {/* <MediaQuery minWidth={995}>
        <NavBar/>
      </MediaQuery>
      <MediaQuery maxWidth={994}>
        <MobileNav/>
      </MediaQuery> */}
      <body>
      <Carousel/>
      </body>
      <br/>
      <br/>

    </div>
  );
}

export default App;
