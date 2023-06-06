import React from 'react'; import { BrowserRouter,  Routes,   Route } from "react-router-dom";
import Home from "./Pages/Home";
import Servicios from "./Pages/Servicios";
import Videos from "./Pages/Videos";
import Page404 from "./Pages/Page404";
import Header from './Organinms/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Organinms/Footer';


const App = () => {
  return (
    <>
    <Header />
      <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/videos" element={<Videos />} />
          {/* <Route path="/juegos" element={<Games />} /> */}
          <Route path="/contacto" element={<Contact />} /> 
          <Route element={<Page404 />} />       
      </Routes>
      <Footer />
    </>   
      
    
  
  )
}


export default App


