import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllItems from './components/allItems/AllItems';
import ShowItem from './components/showItem/ShowItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/allItems' element={<AllItems/>}/>
          <Route path='/showItem/:id' element={<ShowItem/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
