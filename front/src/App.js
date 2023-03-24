import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Header from './components/headeer/Header';
import Collabs from './components/collabs/Collabs'
import AboutUs from './components/aboutUs/AboutUs';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';
import CartUser from './components/cartUser/CartUser';
import Footer from './components/Footer/Footer';
import Profile from './components/profile/Profile';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/showItem/:id' element={<ShowItem />} />
          <Route path='/allItems' element={<AllItems />} />
          <Route path='/cartUser' element={<CartUser />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/friendsShops' element={<Collabs />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
