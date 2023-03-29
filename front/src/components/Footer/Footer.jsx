import './Footer.css'
import logo from '../img/imgHeader/cropped-hilo-doble-logo.png'; 
import ig from '../img/imgHeader/ig.svg';
import tw from '../img/imgHeader/tw.svg';
import fb from '../img/imgHeader/fb.svg';
import * as React from 'react';

function Footer() {
  
  return (

    <div className='footerContainer'>
      <div className='footerTop'>
        <div className='footerBlock'>
          <img className='logo' src={logo} alt="logo" />
          <p>HiloDoble es la oportunidad de compartir solidaridad llevando diseños con materiales reciclados y ofrecer un empleo a colectivos en vulnerabilidad.</p>
        </div>
        <div className='footerBlock'>
          <h3>Nuestra web</h3>
          <ul className='footerMenuList'>
            <li><a href={`/home`}>INICIO</a></li>
            <li><a href={`/allItems`}>TIENDA</a></li>
            <li><a href={`/aboutUs`}>SOBRE NOSOTROS</a></li>
            <li><a href={`/friendsShops`}>TIENDAS AMIGAS</a></li>
            <li><a href="index.html">CONTACTA</a></li>
          </ul>
        </div>
        <div className='footerBlock'>
        <h3>Síguenos en:</h3>
          <ul className='footerSocialList'>
            <li><a href="https://www.facebook.com/hilodoble/"><img src={fb} alt="fb" /></a></li>  
            <li><a href="https://twitter.com/Hilodoble_"><img src={tw} alt="tw" /></a></li>
            <li><a href="https://www.instagram.com/hilodobleshop/"><img src={ig} alt="ig" /></a></li>  
          </ul>
        </div>
      </div>
      
      <div className='subFooter'>
        <ul>
          <li><a href={`/privacy`}>política de privacidad</a></li>
          <li><a href={`/legal`}>aviso legal</a></li>
          <li><a href={`/cookies`}>política de cookies</a></li>
          <li><a href={`/returns`}>política de devoluciones</a></li>
        </ul>
      </div>
    </div>
  )
  
}

export default Footer