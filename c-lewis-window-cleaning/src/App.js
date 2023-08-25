import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar.css';
import MediaQuery from 'react-responsive'

import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import { useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  return (
    <div className="App">
      <MediaQuery minWidth={995}>
        <NavBar/>
      </MediaQuery>
      <MediaQuery maxWidth={994}>
        <MobileNav/>
      </MediaQuery>
      <header className="App-header">
      </header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
