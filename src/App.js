import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavigationBar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroCarousel />
      <Services />
      <Technologies />
      
      {/* You can add more sections here */}
      {/* <About /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
