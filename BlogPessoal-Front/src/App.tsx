import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from './components/estatico/navbar/Navbar';
import Footer from './components/estatico/footer/Footer';
import Contato from './paginas/contato/Contato';
import Home from './paginas/home/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Contato/>
      <Footer/> 
    </>
  );
}

export default App;
