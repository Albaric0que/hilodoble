import React,  { useEffect, useState } from 'react'
import axios from 'axios';
import '../showItem/ShowItem.css'
import { useParams } from 'react-router-dom';

function ShowItem() {
  const param = useParams();
  const [ item, setItem ] = useState([]);

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/item/${param.id}`)
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
    <div>
    <h1 className='nameItem'>{item.itemName}</h1>
    <div className= "containerProduct" key={item.id}>
        <div className= "secondContainer">
          <img src={item.image} alt={item.itemName} className='imgSize'></img>
          <div className= "containerText">
            <p className= "descriptionItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto facilis, deserunt nobis fuga, nulla similique cumque fugit earum voluptates illum, ducimus harum laudantium cum dignissimos vel delectus sapiente eveniet.</p>
            <h3 className= "priceItem">{item.price}€</h3>
            <button className= "cartBtn">Añadir al carrito</button>
          </div>
        </div>
    </div>
    </div>
    )
}

export default ShowItem