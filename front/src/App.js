import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Collabs from './components/collabs/Collabs'
import AboutUs from './components/aboutUs/AboutUs';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';
import CartUser from './components/cartUser/CartUser';
import Footer from './components/Footer/Footer';
import Button from './components/collabs/Button';


function App() {

  const [user, setUser] = useState(null)

  const login = () => {
    setUser ({
      id: 1,
      email: "femcoder@hilodoble.com"
    })
  }

  const logout = () => setUser(null)

  return (
    <div className="App">
      <Header />
      <BrowserRouter>

        {
          user ? (
          <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )
        }

        <Routes>
          <Route path='/showItem/:id' element={<ShowItem />} />
          <Route path='/allItems' element={<AllItems />} />
          <Route path='/cartUser' element={<CartUser />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/friendsShops' element={<Collabs />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;