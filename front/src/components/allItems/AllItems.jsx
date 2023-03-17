import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../allItems/AllItems.css'

function AllItems() {

  const param = useParams()
  const [ items, setItems ] = useState([])

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api`)
      .then((response) =>  {
        const api = response.api;
        setItems(api);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return (
    <div key={item.id} className= 'container'>
      {items.map((item)=>{
        return(
          <h1>Nuestra tienda</h1>
          <h3>Artesanía, reciclaje y diseños exclusivos</h3>
          <div src={item.image} alt={item.itemName} className= 'imgContainer'></div>
          <div>
            <h3 className= 'nameItem'>{item.itemName}</h3>
            <h3 className= 'priceItem'>{item.price}</h3>
            <button className= 'cartBtn'>Añadir al carrito</button>
          </div>
        )
      })}
    </div>
  )
}

export default AllItems