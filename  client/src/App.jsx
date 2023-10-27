import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Products from './components/products';
import Events from './components/EventPage';
import Footer from './components/footer';
import Logo from './components/logo';

import { useContext, createContext } from 'react';
import Carousel from './components/context/carouselContext';

import FAQ from './components/faq';
import CustomSourcing from './components/products/customSourcing';






function App() {
  return (
      
      <div>
        {/* <Admin dataProvider={lb4Provider} */}
         <Logo/>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ Carousel={Carousel}  />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Gallery" element={<Products />} />
          <Route path="/products/customSourcing" element={<CustomSourcing/>}/> 
        
        </Routes>
        <Footer />
        
      </div>
   
  );
}

export default App;
