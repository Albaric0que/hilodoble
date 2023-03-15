import React from 'react'
import '../showItem/ShowItem.css'

function ShowItem() {
  return (
    <div className= "container">
      <h1 className= "nameItem">Riñonera de lona reciclada</h1>
        <div className= "secondContainer">
          <div className= "imgContainer"></div>
          <div className= "containerText">
            <h3 className= "priceItem">14,90€</h3>
            <p className= "descriptionItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto facilis, deserunt nobis fuga, nulla similique cumque fugit earum voluptates illum, ducimus harum laudantium cum dignissimos vel delectus sapiente eveniet.</p>
            <button className= "cartBtn">Añadir al carrito</button>
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default ShowItem