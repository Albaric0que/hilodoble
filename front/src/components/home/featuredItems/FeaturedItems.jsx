import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../featuredItems/FeaturedItems.css';

function FeaturedItems() {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api`)
        .then((response) => {
            setItems(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        
    },[]);

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

    const randomItems = items.sort(() => Math.random() - 0.5).slice(0, 3);

return (
    <div id="FeaturedItems">
    <div className='titleContainer'>
        <h1>La solidaridad que se lleva</h1>
        <div className="purpleRec"> </div>
        <h3>Productos realizados con materiales 100% reciclados</h3>
    </div>
    <div className="containerFeaturedItems">
    {randomItems.map((item) => {
        return (
        
        <Link key={item.id} to={`/showItem/${item.id}`} className="featuredProductContainer">
            <img src={item.image} alt={item.itemName} className="imgContainer"></img>
            <div>
                <h3 className="nameItem">{item.itemName}</h3>
                <h3 className="priceItem">{item.price}€</h3>
                <button className="cartBtn" onClick={() => handleAddToCart(item.id)}>
                Añadir al carrito
                </button>
            </div>
        </Link>
        );
        })}
        {message && <p className="message">{message}</p>}
    </div>
    </div>
    );
}

    export default FeaturedItems;