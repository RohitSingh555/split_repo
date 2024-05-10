// App.jsx

import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar id="top"/>
      <Outlet />
      <Footer />
      {/*       <Navbar />
      <Outlet />
      <Footer /> */}
    </>
  );
};

export default App;
