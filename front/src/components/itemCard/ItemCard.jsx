import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

/* import {Link} from 'react-router-dom' */
import '../itemCard/ItemCard.css'

function ItemCard() {

    const param = useParams()
    const [ item, setItem ] = useState([])

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/${param.id}`)
        .then((response) => setItem(response.data))
        .catch((error) => console.log(error))
    },[param.id])

    return (
        <div key={item.id} className= "container">
        <div src={item.image} alt={item.itemName} className= "imgContainer"></div>
        <div>
            <h3 className= "nameItem">{item.itemName}</h3>
            <h3 className= "priceItem">{item.price}</h3>
            <button className= "cartBtn">Añadir al carrito</button>
        </div>
        </div>
    )
    }

export default ItemCard