import React from 'react'
import '../card/Card.css'

function Card() {
  return (
    <div className= "container">

      <div className= "img-container"></div>

      <div>
        <h3 className= "name-item">Riñonera de lona reciclada</h3>
        <h3 className= "price-item">14,90€</h3>
        <button className= "button">Añadir al carrito</button>
      </div>

    </div>
  )
}

export default Card