import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/imgHeader/logo.png';
import cart from '../img/imgHeader/cart.svg';
import MyProfile from './myProfile/MyProfile';
import Head from './head/Head';
import Searchbar from './searchbar/Searchbar';
import Navbar from './navbar/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <div>
        <Head/>
        <div className='mainIcons'>
          <img className='logo' src={logo} alt="logo" />
          <div className='rightIcons'>
            <Searchbar/>
            <img className='cart' src={cart} alt="logo" />
            <MyProfile/>
          </div>
          <div className='toggleMenu'> 
            <Navbar/>
          </div>
        </div>
        <div className='navbarDesktop'>
          <Navbar/>
        </div>
      </div>
    </>   
  )
}

export default Header