import React, { useEffect, useState } from 'react'
/* import { Link } from 'react-router-dom' */
import axios from 'axios';
import '../allItems/AllItems.css'

const baseURL ='http://127.0.0.1:8000/api';

export default function AllItems(){
  const [items, setItems]= React.useState(null);

  React.useState(() =>{
    axios.get(baseURL).then((response) =>{
      setItems(response.data);
    });
  }, []);

  if(!items) return null;

  return (
    <div className='container'>
      <h1>Nuestra tienda</h1>
      <h3>Artesanía, reciclaje y diseños exclusivos</h3>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div src={item.image} alt={item.itemName} className='imgContainer'></div>
            <div>
              <h3 className='nameItem'>{item.itemName}</h3>
              <h3 className='priceItem'>{item.price}</h3>
              <button className='cartBtn'>Añadir al carrito</button>
            </div>
          </div>
        ) 
      })}  
    </div>
  );
} 
/* 
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
    <div className='container'>
      <h1>Nuestra tienda</h1>
      <h3>Artesanía, reciclaje y diseños exclusivos</h3>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div src={item.image} alt={item.itemName} className='imgContainer'></div>
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

 export default AllItems  */