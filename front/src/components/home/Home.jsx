/* import React from 'react'; */
import React, { useEffect, useState } from 'react'
import '../home/Home.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'

/* function Home() {
    return (
        <div className= 'homeTitle'>🏡HOLIIIII ESTA ES LA HOME!!!🏡</div>
    )
} */

const Home = () => {
/*     const [sliderImages, setSliderImages] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]); */
    const param = useParams();
    const [ item, setItem ] = useState([]);
  
    useEffect(() => {
      // Obtener imágenes del slider
      axios
        .get(`http://127.0.0.1:8000/api/showItem/${param.id}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.error(error);
        });   
  
      // Obtener productos destacados
      axios
        .get("https://ejemplo.com/api/featured-products")
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
       {/*  {Slider} */}
        <div className="slider">
          {item.map((image) => (
            <img key={item.id} src={item.url} alt={item.alt} />
          ))}
        </div>
  
        {/* Productos destacados */}
        <div className="featured-products">
          {item.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
