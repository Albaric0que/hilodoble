import React from 'react'
import logo from '../img/logo.png';
import cart from '../img/cart.png';
import MyProfile from '../MyProfile/MyProfile';
import Head from '../Head/Head';
import Searchbar from '../Searchbar/Searchbar';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="Header.css" />
      <Head/>
      <img src={logo} alt="logo" />
      <img src={cart} alt="logo" />
      <Searchbar/>
      <MyProfile/>
      <Navbar/>
    </>
  )
}

export default Header