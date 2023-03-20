import React, { useEffect, useState } from 'react'
/* import { Link } from 'react-router-dom' */
import axios from 'axios';
import '../allItems/AllItems.css'
 
function AllItems() {

  const [ items, setItems ] = useState([]);

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api`)
      .then((response) =>  {
        const data = response.data;
        setItems(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='containerCard'>
      <h1>Nuestra tienda</h1>
      <h3>Artesanía, reciclaje y diseños exclusivos</h3>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.itemName} className='imgContainer'></img>
            <div>
              <h3 className='nameItem'>{item.itemName}</h3>
              <h3 className='priceItem'>{item.price}</h3>
              <button className='cartBtn'>Añadir al carrito</button>
            </div>
          </div>
        ) 
      })}  
    </div>
  )
} 

 export default AllItems  