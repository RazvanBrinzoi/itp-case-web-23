import React from 'react';
//Components Import
import Nav from './components/Nav'
//Pages import
import Parking from './pages/Parking'
import ParkingDetails from './pages/ParkingDetails'
import Bikes from './pages/Bikes'
// Global Style
import GlobalStyle from './components/GlobalStyle';
// Router
import { Routes, Route, useLocation } from 'react-router-dom';
// Animations support 
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' Component={Parking}></Route>
          <Route path='/parking/:id' Component={ParkingDetails}></Route>
          <Route path='/bike' Component={Bikes}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
