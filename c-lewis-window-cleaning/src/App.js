import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/NavBar.css';

import MediaQuery from 'react-responsive'
import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ContactForm from './components/Form';
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
        {/* <NavBar/> */}
      </MediaQuery>
      <MediaQuery maxWidth={994}>
      </MediaQuery>
        {/* <Home/> */}
        <ContactForm/>
        <Footer/>
      </body>
    </html>
  );
}

export default App;
