import React from "react"
import './Collabs.css'
import bicicletas from '../img/imgCollabs/bicicletas.png'
import ambar from '../img/imgCollabs/ambar.png'
import Button from "./Button"



function Collabs(){
    return (
        <>
        <div className='container1'>
            <h2 className='title'>Tiendas Amigas</h2>
            <div className="purpleRec"> </div>
            <p className='text1'>En nuestra sección TIENDA, tienes nuestros productos para compralos online, pero si eres de verlos en persona, además de nuestra participación en diferentes eventos, a continuación te indicamos el listado de "tiendas amigas" donde puedes encontrarlos: </p>
        </div>

        <section className='cardFriendShop'>
        <img className="friendShop1" src={bicicletas} alt="Tienda Clinica de la Bicicleta" />
        <div className="info1">
            <h2>Clínica de la Bicicleta</h2>
            <h3>C/Victoria, 15, 29012 Málaga</h3>
            <p>Expertos en bicicleta urbana:
<br></br>-Venta de bicis nuevas; para la ciudad, para viajar, híbridas, eléctricas (E-Bikes),…
<br></br>– Todo tipo de accesorios y componentes para hacer más fácil el uso de la bici en la jungla de la ciudad. ( candados, cascos, luces,….)
<br></br>-Reparaciones y asesoramiento a tu medida.</p>
<div>
                <Button text='Facebook' clase='frame'/>         
                <Button text='Website' clase='frame'/>
                <Button text='Cómo llegar' clase='frame'/>
            </div>
        </div>
        <div>

        </div>
        </section>

        <section className='cardFriendShop'>
        <div className="info2">
            <h2>Ámbar Showroom</h2>
            <h3>C/ Andrés Pérez, 4, 29008 Málaga</h3>
            <p>Moda original, alternativa, diferente. Encontrarás diseños patchwork, colores vibrantes, y también un estilo más natural pero igualmente con carácter y expresivo. Disponemos de complementos únicos creados en Málaga. Ambär es moda original, para gente original a la que le gusta expresarse de muchas formas.</p>
            <div>
                <Button text='Facebook' clase='frame'/>         
                <Button text='Website' clase='frame'/>
                <Button text='Cómo llegar' clase='frame'/>
            </div>
        </div>
        <img className="friendShop1" src={ambar} alt="Tienda Clinica de la Bicicleta" />
        </section>

        <section className='cardFriendShop'>
        <img className="friendShop1" src={bicicletas} alt="Tienda Clinica de la Bicicleta" />
        <div className="info1">
            <h2>Clínica de la Bicicleta</h2>
            <h3>C/Victoria, 15, 29012 Málaga</h3>
            <p>Expertos en bicicleta urbana:
<br></br>-Venta de bicis nuevas; para la ciudad, para viajar, híbridas, eléctricas (E-Bikes),…
<br></br>– Todo tipo de accesorios y componentes para hacer más fácil el uso de la bici en la jungla de la ciudad. ( candados, cascos, luces,….)
<br></br>-Reparaciones y asesoramiento a tu medida.</p>
<div>
                <Button text='Facebook' clase='frame'/>         
                <Button text='Website' clase='frame'/>
                <Button text='Cómo llegar' clase='frame'/>
            </div>
        </div>
        </section>

        <section className='cardFriendShop'>
        <div className="info2">
            <h2>Ámbar Showroom</h2>
            <h3>C/ Andrés Pérez, 4, 29008 Málaga</h3>
            <p>Moda original, alternativa, diferente. Encontrarás diseños patchwork, colores vibrantes, y también un estilo más natural pero igualmente con carácter y expresivo. Disponemos de complementos únicos creados en Málaga. Ambär es moda original, para gente original a la que le gusta expresarse de muchas formas.</p>
            <div>
                <Button text='Facebook' clase='frame'/>         
                <Button text='Website' clase='frame'/>
                <Button text='Cómo llegar' clase='frame'/>
            </div>
        </div>
        <img className="friendShop1" src={ambar} alt="Tienda Clinica de la Bicicleta" />
        
        </section>
        
        </>

    );
}

export default Collabs 
