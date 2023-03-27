import React, { useEffect, useState } from 'react'
import '../home/Home.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Carrousel from './carrousel/Carrousel';
import FeaturedItems from './featuredItems/FeaturedItems';


function Home() {
  return (
    <>
      <Carrousel/>
      <div>Home</div>
      <FeaturedItems />

    </>
  )
}
export default Home