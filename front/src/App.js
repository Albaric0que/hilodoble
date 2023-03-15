import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCard from './components/itemCard/ItemCard';
import ShowItem from './components/showItem/ShowItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/itemCard' element={<ItemCard/>}></Route>
          <Route path='/showItem' element={<ShowItem/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
