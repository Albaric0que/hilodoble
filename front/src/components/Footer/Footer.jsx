import './Footer.css'
import * as React from 'react';

function Footer() {
  
  return (

    <div className='footerContainer'>
      <div className='footerTop'>
        <div className='footerBlock'>
          <p>HiloDoble es la oportunidad de compartir solidaridad llevando diseños con materiales reciclados y ofrecer un empleo a colectivos en vulnerabilidad.</p>
        </div>
        <div className='footerBlock'>
          <h3>Nuestra web</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Tiendas amigas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacta</a></li>
          </ul>
        </div>
        <div className='footerBlock'>
          <p>Síguenos en:</p>
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      </div>
      
      <div className='subFooter'>
        <ul>
          <li><a href="#">macarrones</a></li>
          <li><a href="#">macarrones</a></li>
          <li><a href="#">macarrones</a></li>
          <li><a href="#">macarrones</a></li>
        </ul>
      </div>
    </div>
  )
  
}

export default Footer