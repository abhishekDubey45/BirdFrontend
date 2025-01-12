import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router";
import {About} from './About';
import {Sign} from './Sign';
import {ContactUs} from './ContactUs';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navbars } from './Navbars';
export const AppNavbar = () => {
return(
<>
<Router>
      {/* Your Navbar Component */}
      <Navbars/>

      {/* Define Routes for each page */}
      <Routes>
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sign" element={<Sign />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
</>
);
}