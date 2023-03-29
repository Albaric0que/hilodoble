import React from 'react'
import logo from '../img/imgHeader/logo.png';
import Head from './head/Head';
import Navbar from './navbar/Navbar';
import './Header.css'; 

function Header() {
  return (
    <>
      <div>
        <Head/>
        <div className='mainIcons'>
          <img className='logo' src={logo} alt="logotipo" />
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