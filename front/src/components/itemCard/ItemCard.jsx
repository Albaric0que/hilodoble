import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../itemCard/ItemCard.css'

function ItemCard() {

  const param = useParams()
  const [ item, setItem ] = useState([])

  useEffect(()=>{
    fetch(`RUTAAPIOCHOMILLLLL${param.id}`)
    .then ((res)=>res.json())
    .then ((data)=>setItem(data))
  },[param.id])

  return (
    <div key={item.id} className= "container">
      <div src={item.image} alt={item.itemName} className= "img-container"></div>
      <div>
        <h3 className= "name-item">{item.itemName}</h3>
        <h3 className= "price-item">{item.price}</h3>
        <button className= "cartBtn">Añadir al carrito</button>
      </div>
    </div>
  )
}

export default ItemCard