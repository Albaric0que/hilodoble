import './Footer.css'
import logo from '../img/logo.png';
import ig from '../img/ig.svg';
import tw from '../img/tw.svg';
import fb from '../img/fb.svg';
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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Tiendas amigas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacta</a></li>
          </ul>
        </div>
        <div className='footerBlock'>
        <h3>Síguenos en:</h3>
          <ul className='footerSocialList'>
            <li><a href="#"><img src={fb} alt="fb" /></a></li>
            <li><a href="#"><img src={tw} alt="tw" /></a></li>
            <li><a href="#"><img src={ig} alt="ig" /></a></li>
          </ul>
        </div>
      </div>
      
      <div className='subFooter'>
        <ul>
          <li><a href="#">política de privacidad</a></li>
          <li><a href="#">aviso legal</a></li>
          <li><a href="#">política de cookies</a></li>
          <li><a href="#">política de devoluciones</a></li>
        </ul>
      </div>
    </div>
  )
  
}

export default Footer