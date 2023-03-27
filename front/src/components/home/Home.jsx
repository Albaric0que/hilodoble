/* import React from 'react'; */
import React, { useEffect, useState } from 'react'
import '../home/Home.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Carrousel from '../../components/home/carrousel/Carrousel';

/* function Home() {
    return (
        <div className= 'homeTitle'>🏡HOLIIIII ESTA ES LA HOME!!!🏡</div>
    )
} */

const Home = () => {

    const param = useParams();
    const [ item, setItem ] = useState([]);
    const handleAddToCart = (itemId) => {
    const token = localStorage.getItem('token'); 
    }

    useEffect(() => {
      
      // Obtener productos destacados
      axios
        .get(`http://127.0.0.1:8000/api/showItem/${param.id}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
      <>
      <Carrousel/>
      <Link key={item.id} to={`/showItem`} className="productContainer">
            <img src={item.image} alt={item.itemName} className="imgContainer"></img>
            <div>
              <h3 className="nameItem">{item.itemName}</h3>
              <h3 className="priceItem">{item.price}€</h3>
              <button className="cartBtn" onClick={() => handleAddToCart(item.id)}>
                Añadir al carrito
              </button>
            </div>
      </Link>
      </>
      )
  }
  
  export default Home;
