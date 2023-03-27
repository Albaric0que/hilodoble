import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './components/header/Header';
import Collabs from './components/collabs/Collabs'
import AboutUs from './components/aboutUs/AboutUs';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';
import CartUser from './components/cartUser/CartUser';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/showItem/:id' element={<ShowItem/>} />
          <Route path='/allItems' element={<AllItems/>} />
          <Route path='/cartUser' element={<CartUser/>} />
          <Route path='/aboutUs' element={<AboutUs/>} />
          <Route path='/friendsShops' element={<Collabs/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;