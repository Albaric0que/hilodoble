import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* import { useParams } from 'react-router-dom';
 */
function FeaturedItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api`)
        .then(response => {
            const items = response.data.items; // Accede al array de elementos en el objeto de respuesta
            setItems(items);
        })
        .catch(error => {
            console.log(error);
        });
    },[items]);

    // Seleccionamos un número aleatorio de productos destacados para mostrar
    const numFeaturedItemsToShow = 3;

    // Verificamos que los datos hayan sido cargados antes de tratar de usarlos
    if (!items || items.length === 0) {
        return <div>Cargando datos...</div>;
    }

    const featuredItems = shuffleArray(items.filter(item => item.isFeatured)).slice(0, numFeaturedItemsToShow);

    // Función para mezclar el array de productos de forma aleatoria
    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    return (
        <div>
        <h2>Productos destacados</h2>
        <div className="item-grid">
            {featuredItems.map(item => (
            <div className="item" key={item.id}>
                <img src={item.image} alt={item.itemName} />
                <h3>{item.itemName}</h3>
                <p>{item.price} €</p>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default FeaturedItems;