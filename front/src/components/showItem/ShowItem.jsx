import React,  { useEffect, useState } from 'react'
import axios from 'axios';
import '../showItem/ShowItem.css'
import { useParams } from 'react-router-dom';

function ShowItem() {
  const param = useParams();
  const [ item, setItem ] = useState([]);

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/showItem/${param.id}`) 
      .then((response) =>  {

        console.log(response)
        
        const data = response.data;
        setItem(data);
      }, )
      .catch(error => {
        console.error(error);
      });

  }, [param.id]);

  return (
    <>
    <h1 className='nameItemShow'>{item.itemName}</h1>
    <div className= 'bigContainer'>
    <div className= 'containerProduct' key={item.id}>
        <div className= 'secondContainer'>
          <img src={item.image} alt={item.itemName} className='imgShow'></img>
          <div className= 'containerText'>
            <p className= 'descriptionItem'>{item.description}</p>
            <h3 className= 'priceItem'>{item.price}€</h3>
            <button className= 'cartBtn'>Añadir al carrito</button>
          </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default ShowItem