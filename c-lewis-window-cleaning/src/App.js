import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/NavBar.css';

import React from 'react';
import { Routes, Route} from 'react-router-dom';

import NavBar from './components/commons/NavBar';

import ScrollToTop from './components/commons/ToTop';
import Home from './pages/Home';
import WindowCleaning from './pages/Services/WindowCleaning';
import GutterCleaning from './pages/Services/GutterCleaning';
import PressureWashing from './pages/Services/PressureWashing';
import ConservatoryCleaning from './pages/Services/ConservatoryCleaning';

import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonalsPage';

import Footer from './components/commons/Footer';
import ThankYou from './pages/ThankYou';

function App() {

  return (
        <>
            <ScrollToTop/> 
            <NavBar/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/home' Component={Home}/>
              <Route path='/home#get-a-quote' Component={Home}/>
              <Route path='/window-cleaning' Component={WindowCleaning}/>
              <Route path='/gutter-cleaning' Component={GutterCleaning}/>
              <Route path='/pressure-washing' Component={PressureWashing}/>              
              <Route path='/conservatory-cleaning' Component={ConservatoryCleaning}/> 
              <Route path='/portfolio' Component={PortfolioPage}/>              
              <Route path='/testimonials' Component={TestimonialsPage}/>
              <Route path='/thank-you' Component={ThankYou}/>                            
            </Routes>
            <Footer/>
        </>
  );
}

export default App;
