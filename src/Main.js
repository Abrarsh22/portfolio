import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Footer from './Footer'; 
import Contact from './Contact';
import Portfolio from './Portfolio';
import Backtotop from './Backtotop';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AOS from "aos";
import 'aos';
import Navbar from './Navbar';

const Main=()=>   {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Backtotop/>  
    <Footer/> 
    </BrowserRouter>
    </>
  );
} 
export default Main;
