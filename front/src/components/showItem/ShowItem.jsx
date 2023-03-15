import React from 'react'
import '../showItem/ShowItem.css'

function ShowItem() {
  return (
    <div className= "container">

      <h1 className= "name-item">Riñonera de lona reciclada</h1>
        <div className= "second-container">
          <div className= "img-container"></div>

          <div className= "container-text">
            <h3 className= "price-item">14,90€</h3>
            
            <p className= "description-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto facilis, deserunt nobis fuga, nulla similique cumque fugit earum voluptates illum, ducimus harum laudantium cum dignissimos vel delectus sapiente eveniet.</p>

            <button className= "cartBtn">Añadir al carrito</button>
          </div>
        </div>

        <div></div>

    </div>
  )
}

export default ShowItem