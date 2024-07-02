import React from 'react';
import './App.css'; // Importe o CSS global, se houver

import Header from './components/Header';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
      <GoToTop /> 

    </div>
  );
}

export default App;
