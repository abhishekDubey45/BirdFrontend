import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router";
import './App.css';
import { Navbars } from './header/Navbars';
import {Footer} from './Footers/Footer';
import {Carousal} from './body/Carousal';
import  {AppNavbar} from './header/AppNavbar';

function App() {
  return (
    <>
  <AppNavbar/>
  <Carousal/>
  <Footer />
    </>
  );
}

export default App;
