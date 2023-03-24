import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;