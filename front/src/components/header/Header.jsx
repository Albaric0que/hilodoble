import React from 'react'
import logo from '../img/imgHeader/logo.png';
import cart from '../img/imgHeader/cart.svg';
import Head from './head/Head';
import Navbar from './navbar/Navbar';
import Searchbar from '../header/searchbar/Searchbar'
import MyProfile from '../header/myProfile/MyProfile'
import './Header.css'; 

function Header() {
  return (
    <>
      <div>
        <Head/>
        <div className='mainIcons'>
          <img className='logo' src={logo} alt="logotipo" />
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