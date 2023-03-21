import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import ItemCard from './components/itemCard/ItemCard';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';
import CartUser from './components/cartUser/CartUser';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/itemCard' element={<ItemCard />} />
          <Route path='/showItem/:id' element={<ShowItem />} />
          <Route path='/allItems' element={<AllItems />} />
          <Route path='/cartUser' element={<CartUser />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
