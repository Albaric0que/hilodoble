import React from 'react'
import logo from '../img/logo.png';
import cart from '../img/cart.png';
import MyProfile from './myProfile/MyProfile';
import Head from './head/Head';
import Searchbar from './searchbar/Searchbar';
import Navbar from './navbar/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <Head/>
      <div className='mainIcons'>
        <img className='logo' src={logo} alt="logo" />
        <div className='rightIcons'>
          <Searchbar/>
          <img className='cart' src={cart} alt="logo" />
          <MyProfile/>
        </div>
      </div>
      <Navbar/>
    </>
  )
}

export default Header