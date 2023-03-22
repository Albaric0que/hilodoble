import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../allItems/AllItems.css';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

function AllItems() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api`)
      .then((response) => {
        const data = response.data;
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddToCart = (itemId) => {
    const token = localStorage.getItem('token'); // get the JWT token from localStorage
  
    axios
      .post(
        'http://127.0.0.1:8000/api/cart/add',
        {
          item_id: itemId,
          purchaseQuantity: 1, // you can change this value as needed
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // include the token in the Authorization header
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setMessage(`${response.data.itemName} ha sido añadido al carrito.`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
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
    
    <div className="containerCard">
      
      {items.map((item) => {
        return (
        
          <div key={item.id} className="productContainer">
            <img src={item.image} alt={item.itemName} className="imgContainer"></img>
            <div>
              <h3 className="nameItem">{item.itemName}</h3>
              <h3 className="priceItem">{item.price} €</h3>
              <button className="cartBtn" onClick={() => handleAddToCart(item.id)}>
                Añadir al carrito
              </button>
            </div>
          </div>   

        );
      })}
      {message && <p className="message">{message}</p>}
    
    </div>
    </div>
    </>
    );
}

export default AllItems;
