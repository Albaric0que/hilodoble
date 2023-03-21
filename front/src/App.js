import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/showItem/:id' element={<ShowItem/>}/>
          <Route path='/allItems' element={<AllItems/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
