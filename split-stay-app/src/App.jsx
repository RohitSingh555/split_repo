// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
