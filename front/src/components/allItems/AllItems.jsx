import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../allItems/AllItems.css';

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
    axios
      .post('http://127.0.0.1:8000/api/cart/add', {
        item_id: itemId,
        purchaseQuantity: 1, // you can change this value as needed
      })
      .then((response) => {
        console.log(response.data);
        setMessage(`${response.data.itemName} ha sido añadido al carrito.`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="containerCard">
      <h1>Nuestra tienda</h1>
      <h3>Artesanía, reciclaje y diseños exclusivos</h3>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.itemName} className="imgContainer"></img>
            <div>
              <h3 className="nameItem">{item.itemName}</h3>
              <h3 className="priceItem">{item.price}</h3>
              <button className="cartBtn" onClick={() => handleAddToCart(item.id)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        );
      })}
      {message && <p className="message">{message}</p>}
      <Link to='/cartUser'>Ir al carrito</Link>
    </div>
  );
}

export default AllItems;
