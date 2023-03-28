import React from "react"
import './Collabs.css'
import clinicaDeLaBicicleta from '../img/imgCollabs/clinicaDeLaBicicleta.png'
import museoThyssen from '../img/imgCollabs/museoThyssen.jpg'
import Button from "./Button"
import {Link} from 'react-router-dom'



function Collabs(){
    return (
        <>

        <div className='titleContainer titleContainerMarginated'>
            <h1>Tiendas Amigas</h1>
            <div className="purpleRec"> </div>
            <p>En nuestra sección TIENDA, tienes nuestros productos para compralos online, pero si eres de verlos en persona, además de nuestra participación en diferentes eventos, a continuación te indicamos el listado de "tiendas amigas" donde puedes encontrarlos: </p>
        </div>

        <section className='cardFriendShop'>
        <div className='friendShopImg'></div>
{/*         <img className="friendShopImg" src={museoThyssen} alt="Tienda Clinica de la Bicicleta" />*/} 
        <div className="info">
            <h2>Clínica de la Bicicleta</h2>
            <h3>C/Poeta Salvador Ibarra España, 2 (Barriada La Roca) 29011 Málaga.</h3>
            <p className="featuredText">Expertos en bicicleta urbana:</p>
                    <p>Venta de bicis nuevas: para la ciudad, para viajar, híbridas, eléctricas ...</p>
                    <p>Todo tipo de accesorios y componentes para hacer más fácil el uso de la bici en la jungla de la ciudad.</p>
                    <p>Reparaciones y asesoramiento a tu medida.</p>
            <div className='shopSocial'>
                <Link to ='https://www.facebook.com/ClinicaDeLaBicicleta/'><Button text='Facebook' clase='frame'/></Link>
                <Link to ='https://www.clinicadelabicicleta.com/'><Button text='Sitio Web' clase='frame'/></Link> 
                <Link to ='https://www.google.com/maps/place/Cl%C3%ADnica+de+la+Bicicleta/@36.732958,-4.432647,18z/data=!4m6!3m5!1s0xd72f7c05b3d8539:0xdbccd044236f14d6!8m2!3d36.732958!4d-4.4326467!16s%2Fg%2F11h14ztpx?hl=es'><Button text='Cómo llegar' clase='frame'/></Link>
            </div>
        </div>
        </section>

        <div className="mapContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.566869803438!2d-4.4348353852224225!3d36.73296227918231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7c05b3d8539%3A0xdbccd044236f14d6!2sCl%C3%ADnica%20de%20la%20Bicicleta!5e0!3m2!1ses!2ses!4v1680002334654!5m2!1ses!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <section className='cardFriendShop reversedCardFriendShop'>
        <div className="info">
            <h2>Museo Carmen Thyssen Málaga</h2>
            <h3>C/ Compañía, 10 (Plaza Carmen Thyssen) 29008 Málaga.</h3>
            <p>El Museo Carmen Thyssen Málaga es una sucursal del Museo Thyssen-Bornemisza de Madrid. Se encuentra en el centro histórico de Málaga y alberga una colección de más de 200 obras de arte español del siglo XIX, con especial énfasis en la pintura andaluza y malagueña. También hay exposiciones temporales y actividades para niños y adultos.Es una visita obligada para los amantes del arte y la cultura que visitan la ciudad de Málaga.</p>
                <div className='shopSocial'>
                    <Link to ='https://www.facebook.com/carmenthyssenmalaga'><Button text='Facebook' clase='frame'/></Link>       
                    <Link to ='https://www.carmenthyssenmalaga.org/'><Button text='Sitio Web' clase='frame'/></Link>
                    <Link to ='https://www.google.com/maps/place/Museo+Carmen+Thyssen+M%C3%A1laga/@36.721409,-4.422999,17z/data=!4m6!3m5!1s0xd72f79b920cfe39:0x3f64d261cf1e2fff!8m2!3d36.7214095!4d-4.4229986!16s%2Fm%2F0pkz_bf?hl=es'><Button text='Cómo llegar' clase='frame'/></Link>
                </div>
        </div>
        <div className='friendShopImg'></div>
{/*         <img className="friendShopImg" src={museoThyssen} alt="Tienda Clinica de la Bicicleta" />*/}        </section>

        <div className="mapContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.047776968589!2d-4.425187285222763!3d36.721413779831394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f79b920cfe39%3A0x3f64d261cf1e2fff!2sMuseo%20Carmen%20Thyssen%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1680002728457!5m2!1ses!2ses" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        </>

    );
}

export default Collabs 
