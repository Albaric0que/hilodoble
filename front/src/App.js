import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCard from './components/itemCard/ItemCard';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/itemCard' element={<ItemCard/>}/>
          <Route path='/showItem/:id' element={<ShowItem/>}/>
          <Route path='/allItems' element={<AllItems/>}/>
        </Routes>
      </BrowserRouter> 
=======
import Header from './components/header/Header';

function App() {
  return ( 
    <div className="App"> 
      <Header/>
>>>>>>> header
    </div>
  ); 
}

export default App;