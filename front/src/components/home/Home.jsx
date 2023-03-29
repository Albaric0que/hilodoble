import React from 'react';
import '../home/Home.css';
import Carrousel from './carrousel/Carrousel';
import FeaturedItems from './featuredItems/FeaturedItems'; 


function Home() {
  return (
    <>
      <Carrousel/>
      <FeaturedItems/>
    </>
  )
} 
export default Home