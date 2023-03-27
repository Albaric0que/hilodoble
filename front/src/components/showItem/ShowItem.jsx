import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../showItem/ShowItem.css';
import { useParams } from 'react-router-dom';

function ShowItem() {
  const param = useParams();
  const [item, setItem] = useState([]);
  const user = JSON.parse(localStorage.getItem('user')); // Get the user from local storage

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/showItem/${param.id}`)
      .then((response) => {
        console.log(response);

        const data = response.data;
        setItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [param.id]);

  const addToCart = async () => {
    if (!user) {
      alert('Please log in to add items to your cart.');
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://127.0.0.1:8000/api/auth/cart`,
        {
          user_id: user.id,
          item_id: item.id,
          purchaseQuantity: 1, // Set the initial quantity to 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Item added to cart.');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add item to cart.');
    }
  };
  

  return (
    <>
      <h1 className="nameItemShow">{item.itemName}</h1>
      <div className="bigContainer">
        <div className="containerProduct" key={item.id}>
          <div className="secondContainer">
            <img src={item.image} alt={item.itemName} className="imgShow"></img>
            <div className="containerText">
              <p className="descriptionItem">{item.description}</p>
              <h3 className="priceItemShow">{item.price}€</h3>
              <button className="cartBtnShow" onClick={addToCart}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowItem;
