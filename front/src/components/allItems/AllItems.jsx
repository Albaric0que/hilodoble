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
      <>
      <div className='titleContainer'>
      <h1>Nuestra tienda</h1>
      <h3>Artesanía, reciclaje y diseños exclusivos</h3>
      </div>
      <div className='main'>
      <div className= 'categories'>
      <h3>Categorías</h3>
      <h4>Todos los productos</h4>
      <ul>
        <li>Bolsos de viaje</li>
        <li>Accesorios</li>
        <li>Material de oficina</li>
      </ul>
      </div>
      <div className='containerCard'>
      {items.map((item) => {
        return (
          <div className= 'productContainer' key={item.id}>
            <img src={item.image} alt={item.itemName} className='imgSize'></img>
            <div>
              <h3 className='nameItem'>{item.itemName}</h3>
              <h3 className='priceItem'>{item.price}€</h3>
              <button className='cartBtn'>Añadir al carrito</button>
              {/* <Link to={`/item/${item.id}`}>
            <img src={item.image} alt={item.name} className= ''/>
            </Link> */}
            </div>
          </div>
        ) 
      })} 
      </div> 
    </div>
    </>
  )
} 

export default AllItems  