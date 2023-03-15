import React from 'react'
import logo from '../img/logo.png';
import cart from '../img/cart.png';
import MyProfile from './MyProfile/MyProfile';
import Head from './Head/Head';
import Searchbar from './Searchbar/Searchbar';
import Navbar from './Navbar/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <Head/>
      <div className='mainIcons'>
        <img className='logo' src={logo} alt="logo" />
        <Searchbar/>
        <div className='rightIcons'>
          <img className='cart' src={cart} alt="logo" />
          <MyProfile/>
        </div>
      </div>
      <Navbar/>
    </>
  )
}

export default Header